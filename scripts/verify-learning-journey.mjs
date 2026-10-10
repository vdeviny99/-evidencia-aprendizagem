import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const base=process.env.EDUKACUCA_PREVIEW_URL ?? 'http://localhost:3117';
await fs.mkdir('evidence',{recursive:true});
const browser=await chromium.launch({headless:true});
const errors=[]; const posts=[];let failSubmission=false;
async function context(options={}){
 const c=await browser.newContext(options);
 await c.route('**/*',async route=>{
  const req=route.request();const u=new URL(req.url());
  if(u.hostname!=='localhost')return route.abort();
  if(u.pathname==='/api/diagnostico'){
   posts.push(JSON.parse(req.postData()));
   return route.fulfill({status:failSubmission?503:200,contentType:'application/json',body:JSON.stringify(failSubmission?{error:'test failure'}:{id:'synthetic-local-test'})});
  }
  if(u.pathname.startsWith('/api/') || u.pathname.startsWith('/_vercel/')) return route.fulfill({status:200,contentType:'application/json',body:'{}'});
  return route.continue();
 });
 const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));return {c,p};
}
const {c,p}=await context({viewport:{width:1440,height:1000}});
await p.goto(base+'/diagnostico/teste');
await p.getByRole('heading',{level:1}).waitFor();
await p.evaluate(()=>localStorage.setItem('edukacuca-diagnostico-dados',JSON.stringify({plan:'free',nome:'Pessoa Teste',email:'teste@example.invalid',whatsapp:'11999999999',idade:'25',fase:'Ensino Superior completo',objetivo:'Organização dos estudos'})));
assert.equal(await p.getByRole('progressbar').getAttribute('aria-valuenow'),'0');
assert.equal(await p.getByRole('button',{name:'Continuar',exact:true}).isDisabled(),true);
await p.getByRole('radio',{name:'Nunca',exact:true}).check();
assert.equal(await p.getByRole('progressbar').getAttribute('aria-valuenow'),'1');
await p.getByRole('button',{name:'Continuar',exact:true}).click();
await p.getByRole('button',{name:'Voltar',exact:true}).click();
assert.equal(await p.getByRole('radio',{name:'Nunca',exact:true}).isChecked(),true);
await p.getByRole('button',{name:'Ver percurso',exact:true}).click();
assert.equal(await p.locator('#journey-map li').count(),8);
await p.getByRole('button',{name:'Ver percurso',exact:true}).click();
await p.getByRole('button',{name:'Pausar movimento',exact:true}).click();
assert.equal(await p.getByRole('button',{name:'Ativar movimento',exact:true}).getAttribute('aria-pressed'),'true');
await p.getByRole('button',{name:'Ativar movimento',exact:true}).click();
for(let i=0;i<33;i++){
 const labels=['Nunca','Raramente','Às vezes','Frequentemente','Sempre'];
 await p.getByRole('radio',{name:labels[i%5],exact:true}).check();
 if([0,4,8,12,16,20,24,28].includes(i)){
  await p.waitForFunction(() => { const img=document.querySelector('aside img'); return img?.complete && img.naturalWidth > 0; }, null, {timeout:10000});
  await p.screenshot({path:`evidence/world-${Math.min(7,Math.floor(i/4))+1}.png`});
 }
 if(i<32) await p.getByRole('button',{name:'Continuar',exact:true}).click();
}
failSubmission=true;
await p.getByRole('button',{name:'Ver meu resultado',exact:true}).click();
await p.locator('p[role=alert]').waitFor();assert.match(await p.locator('p[role=alert]').innerText(),/não conseguimos enviá-las/);
assert.equal(new URL(p.url()).pathname,'/diagnostico/teste');
assert.equal(await p.getByRole('radio',{name:'Às vezes',exact:true}).isChecked(),true);
failSubmission=false;
await p.getByRole('button',{name:'Ver meu resultado',exact:true}).click();
await p.waitForURL('**/diagnostico/resultado');
const payload=posts.at(-1);assert.equal(Object.keys(payload.answers).length,33);assert.equal(payload.answers[1],0);assert.equal(payload.answers[33],2);assert.equal(payload.plan,'free');
await p.screenshot({path:'evidence/result-desktop.png',fullPage:true});
const {c:mobile,p:m}=await context({viewport:{width:390,height:844},reducedMotion:'reduce'});
await m.goto(base+'/diagnostico/teste');await m.getByRole('heading',{level:1}).waitFor();
assert.equal(await m.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
const activeAnimations=await m.evaluate(()=>document.getAnimations().filter(a=>a.playState==='running').length);assert.equal(activeAnimations,0);
await m.getByRole('radio',{name:'Nunca',exact:true}).focus();await m.keyboard.press('ArrowDown');
assert.equal(await m.getByRole('radio',{name:'Raramente',exact:true}).isChecked(),true);
await m.screenshot({path:'evidence/question-mobile-reduced-motion.png',fullPage:true});
await m.goto(base+'/diagnostico/resultado');await m.getByRole('heading',{level:1}).waitFor();
assert.match(await m.getByRole('heading',{level:1}).innerText(),/Resultado não encontrado/);
await fs.writeFile('evidence/browser-verification.json',JSON.stringify({checkedAt:new Date().toISOString(),origin:base,viewports:[1440,390],questions:33,postsMocked:posts.length,noRealSubmission:true,failSubmissionStayedOnTest:true,zeroAnswerPreserved:true,backNavigation:true,reducedMotionActiveAnimations:activeAnimations,keyboardRadioArrow:true,overflow:false,errors},null,2));
assert.deepEqual(errors,[]);
await c.close();await mobile.close();await browser.close();console.log('Journey verification passed');

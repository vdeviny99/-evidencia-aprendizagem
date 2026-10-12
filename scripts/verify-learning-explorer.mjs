import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const base=process.env.EDUKACUCA_PREVIEW_URL ?? 'http://localhost:3117';
await fs.mkdir('evidence',{recursive:true});
const b=await chromium.launch({headless:true});
const c=await b.newContext({viewport:{width:1440,height:1000}});const errors=[];
await c.route('**/*',route=>{const u=new URL(route.request().url());if(u.hostname!=='localhost')return route.abort();if(u.pathname.startsWith('/api/')||u.pathname.startsWith('/_vercel/'))return route.fulfill({status:200,contentType:'application/json',body:'{}'});return route.continue();});
const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));
await p.goto(base+'/diagnostico');const s=p.locator('#explorar-estilos');await s.waitFor();
assert.equal(await s.locator('button[data-character][aria-pressed=false]').count(),8);
for(const name of ['Cuca','Saci','Curupira','Boitatá','Caipora','Iara','Boto','Uirapuru']){
 await s.getByRole('button',{name,exact:true}).click();assert.equal(await s.locator('button[data-character][aria-pressed=true]').count(),1);assert.equal(await s.getByRole('heading',{level:3,name,exact:true}).isVisible(),true);
}
await s.getByRole('button',{name:'Iara',exact:true}).click();
await s.screenshot({path:'evidence/explorer-desktop.png'});
await p.screenshot({path:'evidence/landing-desktop.png',fullPage:true});
await p.setViewportSize({width:390,height:844});
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
await s.screenshot({path:'evidence/explorer-mobile.png'});
await p.goto(base+'/diagnostico/captura');await p.getByRole('heading',{level:1}).waitFor();await p.screenshot({path:'evidence/capture-mobile.png',fullPage:true});
assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
await p.evaluate(()=>localStorage.setItem('edukacuca-diagnostico-dados',JSON.stringify({nome:'REAL NAME MUST NOT LEAK',idade:'99',fase:'PRIVATE',objetivo:'PRIVATE'})));
for(let n=1;n<=8;n++){
 await p.goto(base+'/diagnostico/resultado?matriz='+n);await p.getByRole('heading',{level:1}).waitFor();assert.equal(await p.getByText('REAL NAME MUST NOT LEAK').count(),0);assert.match(await p.locator('main').innerText(),/sintética/i);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 for(const anchor of await p.locator('nav[aria-label="Explorar sua leitura"] a').all()){const target=await anchor.getAttribute('href');assert.equal(await p.locator(target).count(),1);}
 if(n===6)await p.screenshot({path:'evidence/result-preview-mobile.png',fullPage:true});
}
await p.goto(base+'/diagnostico/resultado?matriz=1.5');await p.getByRole('heading',{level:1}).waitFor();assert.match(await p.getByRole('heading',{level:1}).innerText(),/Resultado não encontrado/);
await fs.writeFile('evidence/explorer-verification.json',JSON.stringify({checkedAt:new Date().toISOString(),eightCharactersTested:true,initialSelectionEmpty:true,oneSelectionAtATime:true,syntheticPreviewIdentityIsolated:true,allEightPreviewWorlds:true,invalidDecimalRejected:true,viewports:[1440,390],overflow:false,noRealSubmission:true,errors},null,2));assert.deepEqual(errors,[]);
await b.close();console.log('Explorer verification passed');

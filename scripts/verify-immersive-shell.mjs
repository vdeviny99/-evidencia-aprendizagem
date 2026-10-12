import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const base=process.env.EDUKACUCA_PREVIEW_URL??'http://localhost:3117';
const b=await chromium.launch({headless:true});
const c=await b.newContext({reducedMotion:'reduce'});const errors=[];
await c.route('**/*',route=>{const u=new URL(route.request().url());if(u.hostname!=='localhost')return route.abort();if(u.pathname.startsWith('/api/')||u.pathname.startsWith('/_vercel/'))return route.fulfill({status:200,body:'{}'});return route.continue();});
await c.addInitScript(()=>{sessionStorage.removeItem('edukacuca-jornada-v2');localStorage.setItem('edukacuca-diagnostico-dados',JSON.stringify({attemptId:'synthetic-shell-review'}));});
const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));await fs.mkdir('evidence',{recursive:true});
for(const size of [{width:1440,height:900},{width:390,height:844},{width:375,height:667},{width:844,height:390}]){
 await p.setViewportSize(size);await p.goto(base+'/diagnostico/teste');await p.getByRole('button',{name:'Começar jornada',exact:true}).waitFor();
 assert.equal(await p.locator('body > header').count(),0);assert.equal(await p.locator('body > footer').count(),0);
 assert.equal(await p.locator('main').getAttribute('data-experience'),'immersive');
 assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 assert.equal(await p.evaluate(()=>document.documentElement.scrollHeight>innerHeight+1),false);
 await p.screenshot({path:`evidence/immersive-welcome-${size.width}.png`});
 await p.getByRole('button',{name:'Começar jornada',exact:true}).click();await p.getByRole('radio',{name:'Nunca',exact:true}).check();
 assert.equal(await p.evaluate(()=>document.documentElement.scrollHeight>innerHeight+1),false);
 const next=p.getByRole('button',{name:'Continuar',exact:true});await next.scrollIntoViewIfNeeded();assert.equal(await next.isVisible(),true);await next.click();
 await p.waitForFunction(()=>document.querySelector('input[name="question-1"]'));
 await p.screenshot({path:`evidence/immersive-question-${size.width}.png`});
 await p.getByRole('button',{name:'Sair da jornada',exact:true}).click();await p.getByRole('dialog').waitFor();await p.getByRole('link',{name:'Sair agora',exact:true}).click();await p.waitForURL('**/diagnostico');
 assert.equal(await p.locator('body > header').count(),1);assert.equal(await p.locator('body > footer').count(),1);
}
for(const route of ['/diagnostico/captura','/diagnostico/resultado?matriz=6']){await p.goto(base+route);await p.getByRole('heading',{level:1}).waitFor();assert.equal(await p.locator('body > header').count(),0);assert.equal(await p.locator('body > footer').count(),0);}
assert.deepEqual(errors,[]);await fs.writeFile('evidence/immersive-shell-verification.json',JSON.stringify({checkedAt:new Date().toISOString(),sizes:[1440,390,375,844],headerFooterAbsent:true,viewportFits:true,editorialChromeRestored:true,noRealSubmission:true,errors},null,2));await b.close();console.log('Immersive shell verification passed');

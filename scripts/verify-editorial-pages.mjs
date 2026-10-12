import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const base=process.env.EDUKACUCA_PREVIEW_URL??'http://localhost:3117';
const b=await chromium.launch({headless:true});const c=await b.newContext({reducedMotion:'reduce'});const errors=[];
await c.route('**/*',route=>{const u=new URL(route.request().url());if(u.hostname!=='localhost')return route.abort();if(u.pathname.startsWith('/api/')||u.pathname.startsWith('/_vercel/'))return route.fulfill({status:200,body:'{}'});return route.continue();});
const p=await c.newPage();p.on('pageerror',e=>errors.push(e.message));await fs.mkdir('evidence',{recursive:true});
const routes=['/','/cursos','/sobre','/aulas','/contato','/artigos','/privacidade','/diagnostico','/diagnostico/completo'];
for(const width of [1440,390]){
 await p.setViewportSize({width,height:900});
 for(const route of routes){await p.goto(base+route);await p.getByRole('heading',{level:1}).waitFor();assert.equal(await p.locator('body > header').count(),1);assert.equal(await p.locator('body > footer').count(),1);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,route+' '+width);
 if(route==='/cursos'){assert.match(await p.locator('main').innerText(),/R\$ 220/);assert.equal(await p.locator('main a[href*="wa.me"]').count()>0,true);}
 if(route==='/contato')assert.equal(await p.locator('form').count()>0,true);
 if(['/','/cursos','/aulas'].includes(route)) {await p.evaluate(()=>window.scrollTo(0,0));await p.screenshot({path:`evidence/editorial-${route==='/'?'home':route.slice(1)}-${width}.png`,fullPage:true});}
 }
}
assert.deepEqual(errors,[]);await fs.writeFile('evidence/editorial-verification.json',JSON.stringify({checkedAt:new Date().toISOString(),routes,widths:[1440,390],siteChromeRetained:true,overflow:false,coursePriceRetained:true,contactFormPresent:true,noRealSubmission:true,errors},null,2));await b.close();console.log('Editorial pages verification passed');

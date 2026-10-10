import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const base='http://localhost:3117';
await fs.mkdir('evidence/v2-motion',{recursive:true});
const b=await chromium.launch({headless:true});
const c=await b.newContext({viewport:{width:1200,height:900},recordVideo:{dir:'evidence/v2-motion',size:{width:1200,height:900}}});
await c.route('**/*',r=>{const u=new URL(r.request().url());if(u.hostname!=='localhost')return r.abort();if(u.pathname.startsWith('/api/'))return r.fulfill({status:200,body:'{}'});return r.continue();});
await c.addInitScript(()=>localStorage.setItem("edukacuca-diagnostico-dados",JSON.stringify({attemptId:"synthetic-motion-review"})));
const p=await c.newPage();
await p.goto(base+'/diagnostico/teste');await p.getByRole('button',{name:'Começar jornada',exact:true}).click();
await p.waitForTimeout(750);
await p.screenshot({path:'evidence/question-desktop-v2.png'});
await p.waitForTimeout(5500);
for(let i=0;i<4;i++){await p.getByRole('radio',{name:'Às vezes',exact:true}).check();await p.getByRole('button',{name:'Continuar',exact:true}).click();}
await p.waitForTimeout(4000);
const v=p.video();await c.close();await v.saveAs('evidence/journey-motion-v2.webm');await b.close();
console.log('Motion capture saved');

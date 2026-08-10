import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';

const markdown = readFileSync('ebook-completo.md', 'utf-8');

const renderer = new marked.Renderer();
renderer.table = (h, b) => `<table>${h}${b}</table>`;
renderer.tablerow = (c) => `<tr>${c}</tr>`;
renderer.tablecell = (c, f) => {
  const tag = f.header ? 'th' : 'td';
  return `<${tag}>${c}</${tag}>`;
};
marked.setOptions({ renderer, breaks: true, gfm: true });

const bodyHtml = marked.parse(markdown);
const coverHtml = `<div style="page-break-after:always;text-align:center;padding-top:6cm;">
  <h1 style="font-size:30pt;border:none;color:#1a1a1a;">Aprender a Aprender</h1>
  <h2 style="font-size:14pt;color:#c0392b;border:none;">O M&eacute;todo Baseado em Evid&ecirc;ncias<br>para Dominar Qualquer Assunto</h2>
</div>`;

const fullHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Georgia, 'Times New Roman', serif; font-size: 11pt; line-height: 1.6; color: #1a1a1a; }
  h1 { font-size: 22pt; margin-top: 2.5cm; margin-bottom: 0.6cm; page-break-before: always; page-break-after: avoid; color: #1a1a1a; }
  h1:first-of-type { page-break-before: avoid; }
  h2 { font-size: 15pt; margin-top: 1cm; margin-bottom: 0.4cm; page-break-after: avoid; color: #2c3e50; border-bottom: 2px solid #c0392b; padding-bottom: 3px; }
  h3 { font-size: 12pt; margin-top: 0.7cm; margin-bottom: 0.3cm; page-break-after: avoid; color: #34495e; }
  p { margin: 0.15cm 0; text-align: justify; }
  ul, ol { margin: 0.15cm 0; padding-left: 1.2cm; }
  li { margin: 0.05cm 0; }
  table { width: 100%; border-collapse: collapse; margin: 0.3cm 0; font-size: 9pt; page-break-inside: avoid; }
  th, td { border: 1px solid #999; padding: 4px 6px; vertical-align: top; text-align: left; }
  th { background-color: #c0392b; color: #fff; }
  blockquote { margin: 0.3cm 0.5cm; padding: 0.2cm 0.5cm; border-left: 4px solid #c0392b; background: #fdf2f2; color: #555; page-break-inside: avoid; }
  strong { color: #c0392b; }
  code { background: #f4f4f4; padding: 1px 3px; font-size: 9pt; }
  hr { border: none; border-top: 1px solid #ddd; margin: 0.6cm 0; }
  @page { size: A4; margin: 2cm 2.2cm; }
</style>
</head>
<body>${coverHtml}${bodyHtml}</body></html>`;

writeFileSync('/tmp/ebook-final.html', fullHtml, 'utf-8');
console.log('HTML written to /tmp/ebook-final.html');
console.log('Now run:');
console.log('');
console.log('export LD_LIBRARY_PATH=/tmp/chrome-libs/usr/lib/x86_64-linux-gnu:$LD_LIBRARY_PATH');
console.log('/home/vinicius/.cache/ms-playwright/chromium-1228/chrome-linux64/chrome \\');
console.log('  --headless=old --no-sandbox --disable-gpu \\');
console.log('  --print-to-pdf=/home/vinicius/evidencia-aprendizagem/ebook-aprender-a-aprender/Aprender-a-Aprender_Metodo-Evidencias.pdf \\');
console.log('  file:///tmp/ebook-final.html');

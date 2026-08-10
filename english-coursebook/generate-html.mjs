import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';

const markdown = readFileSync('english-bridge-complete.md', 'utf-8');

const renderer = new marked.Renderer();
renderer.table = (header, body) => `<table>${header}${body}</table>`;
renderer.tablerow = (content) => `<tr>${content}</tr>`;
renderer.tablecell = (content, flags) => {
  const tag = flags.header ? 'th' : 'td';
  return `<${tag}>${content}</${tag}>`;
};

marked.setOptions({ renderer, breaks: true, gfm: true });

const bodyHtml = marked.parse(markdown);

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page { size: A4; margin: 2cm 2.2cm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'DejaVu Serif', 'Georgia', 'Times New Roman', serif;
    font-size: 10.5pt;
    line-height: 1.6;
    color: #1a1a1a;
    orphans: 3;
    widows: 3;
  }

  /* Title page */
  h1:first-of-type {
    text-align: center;
    font-size: 28pt;
    margin-top: 4cm;
    margin-bottom: 0.5cm;
    page-break-before: avoid;
    color: #1a3a5c;
  }
  h1:first-of-type + h2 {
    text-align: center;
    font-size: 14pt;
    font-weight: normal;
    color: #c0392b;
    margin-bottom: 2cm;
    border: none;
  }
  h1:first-of-type + h2 + hr + h1 {
    display: none;
  }

  /* Part/Chapter headings */
  h1 {
    font-size: 18pt;
    margin-top: 2cm;
    margin-bottom: 0.6cm;
    page-break-before: always;
    page-break-after: avoid;
    color: #1a3a5c;
    border-bottom: 3px solid #1a3a5c;
    padding-bottom: 4px;
  }
  h1:first-of-type { page-break-before: avoid; }

  h2 {
    font-size: 14pt;
    margin-top: 1cm;
    margin-bottom: 0.4cm;
    page-break-after: avoid;
    color: #2980b9;
    border-bottom: 1px solid #2980b9;
    padding-bottom: 2px;
  }

  h3 {
    font-size: 12pt;
    margin-top: 0.7cm;
    margin-bottom: 0.3cm;
    page-break-after: avoid;
    color: #2c3e50;
  }

  h4 {
    font-size: 10.5pt;
    margin-top: 0.5cm;
    margin-bottom: 0.2cm;
    color: #555;
  }

  p { margin: 0.15cm 0; text-align: justify; }
  ul, ol { margin: 0.15cm 0; padding-left: 1.2cm; }
  li { margin: 0.05cm 0; }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.3cm 0;
    font-size: 9.5pt;
    page-break-inside: avoid;
  }
  th, td {
    border: 1px solid #999;
    padding: 4px 6px;
    vertical-align: top;
    text-align: left;
  }
  th {
    background-color: #2980b9;
    color: #fff;
    font-weight: bold;
  }

  blockquote {
    margin: 0.3cm 0.5cm;
    padding: 0.2cm 0.5cm;
    border-left: 4px solid #c0392b;
    background: #fdf2f2;
    color: #555;
    page-break-inside: avoid;
  }
  blockquote p { margin: 0.1cm 0; }

  strong { color: #c0392b; }
  em { color: #2980b9; }
  code {
    background: #f4f4f4;
    padding: 1px 3px;
    font-size: 9pt;
    border-radius: 2px;
    font-family: 'DejaVu Sans Mono', 'Courier New', monospace;
  }
  hr { border: none; border-top: 1px solid #ddd; margin: 0.5cm 0; }

  /* TOC */
  table.toc { font-size: 10pt; }
  table.toc th { background-color: #1a3a5c; }

  /* Tips box styling */
  blockquote p strong:first-child { color: #c0392b; }
</style>
</head>
<body>
${bodyHtml}
</body>
</html>`;

writeFileSync('/tmp/english-bridge.html', fullHtml, 'utf-8');
console.log('HTML written to /tmp/english-bridge.html');
console.log('HTML length:', fullHtml.length, 'chars');

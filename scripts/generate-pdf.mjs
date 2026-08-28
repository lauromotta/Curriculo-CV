// Gera o PDF do currículo a partir do index.html usando Puppeteer.
// Roda no GitHub Actions (Fase 5.1). Uso local: `node scripts/generate-pdf.mjs`
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});

try {
  const page = await browser.newPage();
  // waitUntil networkidle0 garante que fontes self-hosted e ícones carreguem
  await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle0', timeout: 60000 });

  // Força o tema claro no PDF (impressão sempre legível)
  await page.emulateMediaType('print');

  const pdfPath = path.join(root, 'Curriculo-Lauro-Motta.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  console.log(`✅ PDF gerado: ${pdfPath}`);
} finally {
  await browser.close();
}
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const outputFolder = 'dist';

const prerenderer = new Prerenderer({
  staticDir: path.join(dirname, outputFolder),
  renderer: new PuppeteerRenderer()
});

const rutas = [
  '/',
  '/acerca',
  '/trabajo',
  '/actividades',
  '/contacto'
];

prerenderer.initialize()
  .then(() => prerenderer.renderRoutes(rutas))
  .then(renderedRoutes => {
    renderedRoutes.forEach(route => {
      const outputDir = path.join(dirname, outputFolder, route.route.slice(1) || 'index');
      const outputFile = path.join(outputDir, 'index.html');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, route.html);
    });
  })
  .then(() => prerenderer.destroy())
  .catch(err => {
    console.error(err);
    prerenderer.destroy();
    process.exit(1);
  });
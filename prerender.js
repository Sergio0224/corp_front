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
      // Modifica el manejo de rutas para asegurar una estructura consistente
      const routePath = route.route === '/' ? 'index' : route.route.slice(1);
      const outputDir = path.join(dirname, outputFolder, routePath);
      const outputFile = path.join(outputDir, 'index.html');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputFile, route.html);
    });

    // Asegúrate de tener un index.html en la raíz
    const rootIndexPath = path.join(dirname, outputFolder, 'index.html');
    if (!fs.existsSync(rootIndexPath)) {
      const firstRouteIndexPath = path.join(dirname, outputFolder, 'index', 'index.html');
      if (fs.existsSync(firstRouteIndexPath)) {
        fs.copyFileSync(firstRouteIndexPath, rootIndexPath);
      }
    }
  })
  .then(() => prerenderer.destroy())
  .catch(err => {
    console.error(err);
    prerenderer.destroy();
    process.exit(1);
  });
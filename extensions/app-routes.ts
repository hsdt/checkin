import { KitesInstance } from '@kites/core';
import { Express } from '@kites/express';

/**
 * Routes management
 *
 * @param {kites} kites
 */
function AppRoutes(kites: KitesInstance) {
  kites.on('express:config', (app: Express) => {
    kites.logger.info('Configure page views ...');

    /**
     * common options
     */
    app.use((req, res, next) => {
      // config application version
      req.options = req.options || {};
      req.options.locals = req.options.locals || {};
      req.options.locals.version = kites.options.version;
      next();
    });

    // quick setup
    app.get('/', (req, res) => res.view('index'));
    app.get('/admin', (req, res) => res.view('admin'));
    app.get('/about', (req, res) => res.view('about'));

    // error handler
    app.use((err, req, res, next) => {
      kites.logger.error('Error: ', err);
      res.status(500).json(err.message);
    });
  });

  /**
   * Cấu hình file tĩnh
   */
  kites.on('express:config:static', async (app: Express) => {
    const e = await import('express');
    app.use(e.static('build/client'));
    app.get('/*', (req, res) => res.view('index'));
  });
}

export {
  AppRoutes,
};

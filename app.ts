import { KitesFactory, KitesInstance } from '@kites/core';
import mongoose from 'mongoose';

import { UserService, User, TodoService, DMBangMaService, UtilService, CMLoaiTuDienService, CMTuDienService } from './api';
import { GetDbConnection, AppRoutes } from './extensions';
import pkg from './package.json';

async function bootstrap() {
  const app = await KitesFactory
    .create({
      loadConfig: true,
      discover: true,
      providers: [
        TodoService,
        UserService,
        UtilService,
        CMLoaiTuDienService,
        CMTuDienService,
        DMBangMaService,
      ],
      version: pkg.version,
    })
    .use(AppRoutes)
    .use(GetDbConnection)
    .on('db:connect', async (uri: string, kites: KitesInstance) => {
      if (typeof uri === 'undefined') {
        kites.logger.error('Please config mongodb connection!!!');
        return;
      }

      mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
      kites.logger.info('Mongodb connect ok: ' + uri);

      if (kites.options.env === 'development') {
        const vUser = new User();
        vUser.username = 'admin';
        vUser.password = 'admin';
        const svUser = kites.container.inject(UserService);
        await svUser.create(vUser);
        kites.logger.info('Add default admin(todo:hash) user for testing!');
      }
    })
    .init();

  app.logger.info(`Server started!`);
}

bootstrap();

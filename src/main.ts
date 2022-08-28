import {NestFactory} from '@nestjs/core';
import {ExpressAdapter} from '@nestjs/platform-express';
import {Module} from '@nestjs/common';

import {Logger} from 'nestjs-pino';
import express from 'express';

import {AppModule as CommonModule} from './common/app.module';

@Module({
    imports: [CommonModule],
    controllers: [],
    providers: []
})
class AppModule {}

(async () => {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

    app.useLogger(app.get(Logger));
    app.enableCors();

    await app.listen(3000); // host port
})();

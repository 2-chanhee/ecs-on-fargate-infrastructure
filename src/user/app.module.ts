import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {LoggerModule} from 'nestjs-pino';
import {TypeOrmModule} from '@nestjs/typeorm';
import Joi from 'joi';

import {UserController} from './user.controller';
import {UserModule} from './user.module';
import {UserService} from './user.service';
import configuration from '../configuration';
import {TypeOrmConfigService} from '../lib/typeorm';

@Module({
    imports: [
        LoggerModule.forRoot(),
        ConfigModule.forRoot({
            envFilePath: '.env',
            validationSchema: Joi.object({
                MYSQL_USERNAME: Joi.string().required(),
                MYSQL_ROOT_PASSWORD: Joi.string().required(),
                MYSQL_DATABASE: Joi.string().required(),
                MYSQL_HOST: Joi.string().required()
            }),
            load: [configuration]
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useClass: TypeOrmConfigService
        }),
        UserModule
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class AppModule {}

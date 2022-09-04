import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {LoggerModule} from 'nestjs-pino';

import {CommonController} from './common.controller';
import {CommonModule} from './common.module';
import {CommonService} from './common.service';

@Module({
    imports: [
        LoggerModule.forRoot(),
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        CommonModule
    ],
    controllers: [CommonController],
    providers: [CommonService]
})
export class AppModule {}

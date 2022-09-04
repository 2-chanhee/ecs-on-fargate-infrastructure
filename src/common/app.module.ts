import {Module} from '@nestjs/common';
import {LoggerModule} from 'nestjs-pino';

import {CommonController} from './common.controller';
import {CommonModule} from './common.module';
import {CommonService} from './common.service';

@Module({
    imports: [LoggerModule.forRoot(), CommonModule],
    controllers: [CommonController],
    providers: [CommonService]
})
export class AppModule {}

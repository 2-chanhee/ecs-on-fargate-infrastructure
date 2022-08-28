import {Module} from '@nestjs/common';

import {CommonController} from './common.controller';
import {CommonModule} from './common.module';
import {CommonService} from './common.service';

@Module({
    imports: [CommonModule],
    controllers: [CommonController],
    providers: [CommonService]
})
export class AppModule {}

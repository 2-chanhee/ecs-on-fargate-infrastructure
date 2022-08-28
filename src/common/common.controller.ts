import {Controller, Get} from '@nestjs/common';

import {CommonService} from './common.service';

@Controller('/')
export class CommonController {
    constructor(private readonly commonService: CommonService) {}

    // health check api
    @Get('/status')
    getStatus(): string {
        return this.commonService.getStatus();
    }
}

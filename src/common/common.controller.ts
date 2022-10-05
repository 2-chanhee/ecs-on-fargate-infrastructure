import {Controller, Get} from '@nestjs/common';

import {CommonService} from './common.service';

@Controller('/common')
export class CommonController {
    constructor(private readonly commonService: CommonService) {}

    // health check api
    @Get('/status')
    getStatus(): string {
        console.log('test1');
        return this.commonService.getStatus();
    }
}

import {Injectable} from '@nestjs/common';

@Injectable()
export class CommonService {
    getStatus(): string {
        console.log(123);
        return 'healthy';
    }
}

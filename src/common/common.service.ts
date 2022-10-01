import {Injectable} from '@nestjs/common';

@Injectable()
export class CommonService {
    getStatus(): string {
        console.log(1232);
        return 'healthy';
    }
}

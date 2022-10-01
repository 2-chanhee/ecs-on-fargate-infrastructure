import {Injectable} from '@nestjs/common';

@Injectable()
export class CommonService {
    getStatus(): string {
        console.log(12322);
        return 'healthy';
    }
}

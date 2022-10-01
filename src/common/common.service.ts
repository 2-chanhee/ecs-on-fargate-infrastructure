import {Injectable} from '@nestjs/common';

@Injectable()
export class CommonService {
    getStatus(): string {
        console.log('message console');
        return 'healthy';
    }
}

import {Injectable} from '@nestjs/common';

@Injectable()
export class CommonService {
    getStatus(): string {
        return 'healthy';
    }
}

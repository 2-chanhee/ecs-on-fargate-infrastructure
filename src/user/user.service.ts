import {Injectable} from '@nestjs/common';
import {Connection} from 'typeorm';

import {User} from 'src/entities/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly connection: Connection) {}

    getUsers() {
        return this.connection.getRepository(User).find({});
    }
}

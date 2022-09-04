import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('increment', {type: 'integer', unsigned: true})
    id: number;
}

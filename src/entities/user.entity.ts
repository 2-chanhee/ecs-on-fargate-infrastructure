import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('increment', {type: 'integer', unsigned: true})
    id: number;

    @Column({type: 'varchar', length: 32})
    name: string;
}

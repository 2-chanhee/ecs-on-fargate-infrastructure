import {Injectable} from '@nestjs/common';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions() {
        const options = this.configService.get('typeorm');

        if (!options) throw new Error('Typeorm config not found');

        options.username ??= this.configService.get('MYSQL_USERNAME');
        options.password ??= this.configService.get('MYSQL_ROOT_PASSWORD');
        options.database ??= this.configService.get('MYSQL_DATABASE');
        options.host ??= this.configService.get('MYSQL_HOST');
        options.charset ??= 'utf8mb4';

        return options as TypeOrmModuleOptions;
    }
}

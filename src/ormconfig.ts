import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

//entities: ['dist/**/*.entity{.ts,.js}'],
export const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'recovery_obj',
  migrations: ['dist/**/*.entity{.ts,.js}'],
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
};

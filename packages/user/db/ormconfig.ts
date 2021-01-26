import { ConnectionOptions } from 'typeorm';
import * as entities from './models';

const e = process.env;

const config: ConnectionOptions = {
  type: 'postgres',
  host: e.dbHost,
  port: Number(e.dbPort || 5432),
  username: e.dbUser,
  password: e.dbPassword,
  database: e.databaseName,
  entities: Object.values(entities),
  migrations: ['db/migration/*.ts'],
  migrationsTableName: 'typeorm_migration',
  ssl: false
};

export = config;

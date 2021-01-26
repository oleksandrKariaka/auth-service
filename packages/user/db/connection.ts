import 'reflect-metadata';
import * as entities from './models';
import { createConnection } from 'typeorm';
export * from 'typeorm';

export default (config) =>
  createConnection({
    type: 'postgres',
    host: config.host,
    port: config.port,
    username: config.user,
    password: config.password,
    database: config.database,
    entities: Object.values(entities),
    logging: false,
    ssl: false,
    synchronize: false
  });
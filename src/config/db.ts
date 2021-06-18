import { Sequelize } from 'sequelize';
export const db = new Sequelize('master-data', 'postgres', '123', {
  host: 'localhost',
  port: 5432,
  dialect:  'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
  define:{
    timestamps: false
  }
});
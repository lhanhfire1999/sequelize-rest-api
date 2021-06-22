import Sequelize from 'sequelize';
import {db} from '../config/db';

export interface User {
  id: string;
  username: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
}

export const userModel = db.define('users',{
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey : true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email:  Sequelize.STRING,
  phone:  Sequelize.STRING,
  dateOfBirth: {
    type: Sequelize.DATE,
    field: 'dateofbirth' 
  }
})
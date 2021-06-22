import {User, userModel} from '../../models/User';

export class SqlUserService {
  constructor() {
  }
  all(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      userModel.findAll({
        attributes: [
          'id', 'username','email', 'phone', 
          ['dateofbirth', 'dateOfBirth']
        ]
      })
      .then(data => {
        console.log(data);
        resolve(data as any)
      })
      .catch(err=> reject(err))
      });
  }
  load(id: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      userModel.findOne({
        where: { id }, 
        attributes: ['id' ,'username','email', 'phone', 
        ['dateofbirth', 'dateOfBirth']
      ],
      })
      .then(data => {
        resolve(data as any)
      })
      .catch(err=> reject(err))
    });
  }
  insert(user: User): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const {id, username, email, phone, dateOfBirth} = user;
      userModel.create({id, username, email, phone, dateofbirth : dateOfBirth})
      .then(data => {
        resolve(data as any);
      })
      .catch(err=> reject(err))
    });
  }
  update(user: User): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const {id, username, email, phone, dateOfBirth} = user;
      userModel.update({username, email, phone, dateofbirth : dateOfBirth},{
        where:{id}
      })
      .then(data => {
        resolve(data as any)
      })
      .catch(err=> reject(err))
    });
  }
  delete(id: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      userModel.destroy({
        where: { id }
      })
      .then(data => {
        resolve(data as any)
      })
      .catch(err=> reject(err))
    });
  }
}

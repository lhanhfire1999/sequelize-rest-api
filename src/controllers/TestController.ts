import {Request, Response} from 'express'
import {userModel} from '../models/User'

export const All = async ( req: Request , res: Response  )=>{
  await userModel.findAll({
    attributes: [
      'id', 'username','email', 'phone', 
      ['dateofbirth', 'dateOfBirth']
    ]
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}

export const Load = async ( req: Request , res: Response  )=>{
  const {id} = req.params;
  await userModel.findOne({
    where: { id },
    attributes: ['id' ,'username','email', 'phone', 
    ['dateofbirth', 'dateOfBirth']
  ]
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}
export const Insert = async ( req: Request , res: Response  )=>{
  const {id, username, email, phone, dateOfBirth} = req.body;
  await userModel.create({ 
    id, 
    username, 
    email, 
    phone,
    dateofbirth: dateOfBirth
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}
export const Update = async ( req: Request , res: Response  )=>{
  const {id} = req.params;
  const {username, email, phone, dateOfBirth} = req.body;
  await userModel.update({
    username, 
    email, 
    phone,
    dateofbirth: dateOfBirth
  },
  {
    where:{id}
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}
export const Delete = async ( req: Request , res: Response  )=>{
  const id = req.params.id;
  await userModel.destroy({
    where: { id }
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}
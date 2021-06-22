import {Request, Response} from 'express'
import {userModel} from '../models/User'

export const All = async ( req: Request , res: Response  )=>{
  await userModel.findAll()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}

export const Load = async ( req: Request , res: Response  )=>{
  const {id} = req.params;
  await userModel.findOne({
    where: { id }
  })
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}
export const Insert = async ( req: Request , res: Response  )=>{
  await userModel.create({...req.body})
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err=> res.status(500).send(err))
}
export const Update = async ( req: Request , res: Response  )=>{
  const {id} = req.params;
  await userModel.update({...req.body},
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
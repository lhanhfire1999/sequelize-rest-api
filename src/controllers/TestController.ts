import {Request, Response} from 'express'
import {newUser} from '../models/User'

export const getAll = async (req:Request ,res:Response  )=>{
  await newUser.findAll()
  .then(user => {
    
    res.status(200).json(user)
  })
    
  .catch(err=> res.send(err))
}
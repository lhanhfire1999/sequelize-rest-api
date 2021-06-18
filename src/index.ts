import {json} from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import {createContext} from './init';
import {route, router} from './route';
import {db} from './config/db';


dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(json());

db.authenticate()
  .then(()=>{
    console.log('Database connected ...')
    http.createServer(app).listen(port, () => {
      console.log('Start server at port ' + port);
    });
    const ctx = createContext();
    route(app, ctx);
  } )
  .catch(err => console.log('Error' + err))

  app.use('/test',router);
// pool.connect().then( () => {
//   console.log('Connected successfully to PostgreSQL.')
//   http.createServer(app).listen(port, () => {
//     console.log('Start server at port ' + port);
//   });
//   const ctx = createContext();
//   route(app, ctx);
// })
// .catch(e => {
//   console.error('Failed to connect to PostgreSQL.', e.message, e.stack)
// })

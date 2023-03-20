import { Request, Response } from 'express'
import { User, users } from './users'
import * as jwt from 'jsonwebtoken'
import { passApi }  from './api-secret'

export const authentication = (req: Request, res: Response) => {

  const user: User = req.body;

  //res.json(user.name);
    
  if(checkLogin(user)) {     
      const userData: User = users[user.username];
      //res.json({name: userData.name, email: userData.email});
      
      const token = jwt.sign({sub: userData.username, iss: 'fast-api'}, passApi.secret)
      res.json({name: userData.name, username: userData.username, token: token});
  
  } else {
      res.status(403).json({errorMessage: 'Erro ao fazer login. Dados inválidos'});
  }
}

function checkLogin(user:User): boolean {
    
    if(!user) {
      return false;
    }
    
    const userData = users[user.username];
    return userData !== undefined && userData.authenticationUser(user);
}

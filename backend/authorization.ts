import {Request, Response} from 'express'
import * as jwt from 'jsonwebtoken';
import { passApi } from './api-secret';

export const authorization = (request: Request, response: Response, next) => {

  const token = getToken(request);

  if(token) {
    jwt.verify(token, passApi.secret, (error, decoded) => {

      // o token existe, porém não é válido
      if(!decoded) {
        response.status(403).json({errorMessage: 'Acesso não autorizado'});
      }

      next();
    });
  } else {
    // informa o tipo de token necessário p/ o acesso
    response.setHeader('www-authenticate', 'Bearer token_type="JWT"');
    response.status(403).json({errorMessage: 'O acesso não é permitido sem autenticação'});
  }
}

function getToken(request: Request) {

  let token: string;

  if(request.headers && request.headers.authorization) {
    const strHeaders = request.headers.authorization.split(' ');
    token = strHeaders[1];
  }

  return token;
}

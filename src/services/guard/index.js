import jwt from 'jsonwebtoken'
import rJWT from 'restify-jwt-community'
import { UnauthorizedError } from 'restify-errors'
import { extractToken } from '@/utils'
import { serverConfig } from '@/config'

export const roles = ['user', 'admin']

export const sign = async({ _id, role }) => 
    jwt.sign({_id, role}, serverConfig?.jwt?.secret, {
        expiresIn: '1m'
    })

export const decode = async(token) => 
    jwt.decode(token)

export const doorman = (passedRoles) =>  
    [
        rJWT(serverConfig.jwt), ((req, res, next) => 
            (roles.some(r => passedRoles.includes(r)) && passedRoles.includes(req.user?.role) ? next() : next(new UnauthorizedError()))
        )
        
    ]

export const masterman = () => ((req, res, next) => 
    (serverConfig.masterKey === extractToken(req)) ? next() : next(new UnauthorizedError())
)

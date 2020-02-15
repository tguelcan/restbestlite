import { BadRequestError } from 'restify-errors'
import { sign, decode } from '@/services/guard'
// import { comparePassword } from '@/utils'

/**
 * @throws {BadRequestError} 400 Error - invalid email or password
 */
const errorHandler = (next) => 
    next(new BadRequestError('invalid email or password'))


export const authenticate = async({ body }, res, next) => {    
    // Pass values
    let { badRequest } = body
    
    try {
        // Todo: Validate request body
        
        // Todo: Find user
        let user = { _id: 'd3aguet', email: 'max@moritz.com', role: 'admin' }
        if(!user) 
            return errorHandler(next)
        
        // Todo: just for test
        if(badRequest)
            return errorHandler(next)
        // Compare password
        // let comparedPassword = await comparePassword(password, user.password)
        // if(!comparedPassword) 
        // return errorHandler(next)

        // Sign in user
        let token = await sign(user)
        let { _id, role } = await decode(token)

        // Send response
        res.send({ _id, role, token })

    } catch(error) {
        return next(new BadRequestError(error))
    }
}
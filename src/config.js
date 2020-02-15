import 'dotenv/config'
import { requireProcessEnv, extractToken } from '@/utils'

export const serverConfig = {
    endpoint: '/api',
    port: process.env.PORT,
    server: {
        name: requireProcessEnv('APP_NAME'),
        version: process.env.APP_VERSION
    },
    throttle: {
        burst: 100,     // Max 10 concurrent requests (if tokens)
        rate: 2,        // Steady state: 2 request / 1 seconds
        ip: true,       // throttle per IP
    },
    masterKey: requireProcessEnv('MASTER_KEY'),
    jwt: {
        secret: requireProcessEnv('JWT_SECRET'),
        credentialsRequired: false,
        getToken: (req) => extractToken(req)
    }
}

export const dbConfig = {
    url: process.env.DB_URI,
    options: {}
}

export const restConfig = {}
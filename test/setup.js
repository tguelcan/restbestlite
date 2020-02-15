import { EventEmitter } from 'events'
// import connect from '@/services/database'

EventEmitter.defaultMaxListeners = Infinity

global.Array = Array
global.Date = Date
global.Function = Function
global.Math = Math
global.Number = Number
global.Object = Object
global.RegExp = RegExp
global.String = String
global.Uint8Array = Uint8Array
global.WeakMap = WeakMap
global.Set = Set
global.Error = Error
global.TypeError = TypeError
global.parseInt = parseInt
global.parseFloat = parseFloat

beforeEach(async () => {})

afterEach((done) => {
    done()
})

beforeAll((done) => {
    /*
    connect('urlhere', {}, (err) => {
        if (err) console.error(err)
    })
    */
    done()
})

afterAll((done) => {
    done()
})

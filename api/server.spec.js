const request = require('supertest');

const server = require('./server')

describe('server.js', function () {

    it('should set test env', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
    describe('GET /', function () {

        it('should return 200 ok', function () {
            return request(server).get('/').expect(200)
        })
        //ASYNC version does not need the 'return' before 'request'
        it('should return 200 ok', async function () {
            const response = await request(server).get('/');

            expect(response.status).toBe(200)
        })


        it('should return JSON', function () {
            return request(server)
                .get('/')
                .then(response => {
                    expect(response.type).toMatch(/json/i) // toMatch allows us to use regex
                })
        })



        it('should respond with {"api":"up"}', function () {
            return request(server)
                .get('/')
                .then(response => {
                    expect(response.body.api).toBe("up")

                })
        })

        it('should return {api: "up', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: "up" })
        })
    })
})

describe('server.js', function () {

})

describe('server.js', function () {

})

describe('server.js', function () {

})

describe('server.js', function () {

})
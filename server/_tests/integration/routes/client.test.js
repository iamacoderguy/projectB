const request = require('supertest');
let app;

describe('/', () => {
    beforeEach(() => {
        app = require('../../../startups/app');
    });
    afterEach(() => jest.resetModules());

    describe('GET /', () => {
        it('should redirect to api doc page', async () => {
            // act
            const res = await request(app).get('/');

            // assert
            expect(res.status).toBe(302);
            expect(res.header['location']).toBe('apidoc/index.html');
        })
    })
})
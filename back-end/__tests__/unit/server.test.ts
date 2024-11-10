import req from 'supertest'
import server from "../../src/server";
test('[GET] /api/', async () => {
    const res = await req(server).get('/api/')
    expect(res.text).toBe('Hello, World!')
})
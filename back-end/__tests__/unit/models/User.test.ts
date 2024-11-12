import {Context, createMockContext, MockContext} from '../../../src/prisma/context'
import req from "supertest";

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})

// test('[GET] /api/auth/', async () => {
//     supertest(server).get('/api/auth').expect(200).then((response) => {
//         expect(response.body).toEqual(ctx.prisma.user.findMany())
//     })
// })

test('[GET] /api/auth/register', async () => {
    const user = {
        name: generateRandomString(),
        email: generateRandomString() + '@gmail.com',
        address: generateRandomString(),
        phone: '123456789'
    }
    let res = await req("localhost:5000").post('/api/auth/register').send(user)
    expect(res.status).toBe(201)
    expect(res.body.message).toBe('User ' + user.name + ' created successfully')

    res = await req("localhost:5000").post('/api/auth/register').send(user)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Email already exists')

    user.email = ''
    res = await req("localhost:5000").post('/api/auth/register').send(user)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Email is required')

    user.email = generateRandomString() + '@gmail.com'
    user.name = ''
    res = await req("localhost:5000").post('/api/auth/register').send(user)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Name is required')

    user.name = generateRandomString()
    user.address = ''
    res = await req("localhost:5000").post('/api/auth/register').send(user)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Address is required')

    user.address = generateRandomString()

    user.phone = ''
    res = await req("localhost:5000").post('/api/auth/register').send(user)
    expect(res.status).toBe(201)
    expect(res.body.message).toBe('User ' + user.name + ' created successfully')

})


function generateRandomString(): string {
    return Math.random().toString(36).substring(7);
}
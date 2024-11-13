import {Context, createMockContext, MockContext} from "../../../src/prisma/context";
import req from "supertest";

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})


test('[POST] /api/products/', async () => {
    const product = {
        name: generateRandomString(),
        price: 10,
        category: generateRandomString(),
        description: generateRandomString(),
        imageUrl: generateRandomString()
    }

    let res = await req("localhost:5000").post('/api/products').send(product)
    expect(res.status).toBe(201)
    expect(res.body.message).toBe('Product ' + product.name + ' created successfully')


    product.name = ''
    res = await req("localhost:5000").post('/api/products').send(product)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Name is required')

    product.name = generateRandomString()
    product.price = 0
    res = await req("localhost:5000").post('/api/products').send(product)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Price must be greater than 0')

    product.price = 10
    product.category = ''
    res = await req("localhost:5000").post('/api/products').send(product)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Category is required')

    product.category = generateRandomString()
    product.description = ''
    res = await req("localhost:5000").post('/api/products').send(product)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Description is required')

    product.description = generateRandomString()
    product.imageUrl = ''
    res = await req("localhost:5000").post('/api/products').send(product)
    expect(res.status).toBe(201)
    expect(res.body.message).toBe('Product ' + product.name + ' created successfully')

})

function generateRandomString(): string {
    return Math.random().toString(36).substring(7);
}
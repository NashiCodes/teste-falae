import {Context, createMockContext, MockContext} from "../../../src/prisma/context";
import {PrismaClient} from "@prisma/client";
import req from "supertest";
import server from "../../../src/server";

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})
const db = new PrismaClient()

test('[POST] /api/orders/', async () => {
    const order = {
        userId: await getRandomUserId(),
        OrderItem: [
            {
                productId: await getRandomProductId(),
                quantity: Math.floor(Math.random() * 10)
            },
            {
                productId: await getRandomProductId(),
                quantity: Math.floor(Math.random() * 10)
            },
            {
                productId: await getRandomProductId(),
                quantity: Math.floor(Math.random() * 10)
            }
        ]
    }

    let res = await req(server).post('/api/orders').send(order)
    expect(res.status).toBe(201)
    expect(res.body.message).toBe('Order created successfully')

    order.userId = ""
    res = await req(server).post('/api/orders').send(order)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('userId is a required field')

    order.userId = await getRandomUserId()
    order.OrderItem = []
    res = await req("localhost:5000").post('/api/orders').send(order)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('OrderItem is a required field')

    order.OrderItem = [
        {
            productId: "",
            quantity: Math.floor(Math.random() * 10)
        }
    ]
    res = await req("localhost:5000").post('/api/orders').send(order)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('productId is a required field')

    order.OrderItem[0].productId = await getRandomProductId()
    order.OrderItem[0].quantity = 0
    res = await req("localhost:5000").post('/api/orders').send(order)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('quantity must be greater than or equal to 1')

    order.OrderItem[0].quantity = Math.floor(Math.random() * 10)
    res = await req("localhost:5000").post('/api/orders').send(order)
    expect(res.status).toBe(201)
    expect(res.body.message).toBe('Order created successfully')

})


async function getRandomUserId() {
    let users = await db.user.findMany({select: {id: true}})
    let randomUser = users[Math.floor(Math.random() * users.length)]
    return randomUser.id
}

async function getRandomProductId() {
    let products = await db.product.findMany({select: {id: true}})
    let randomProduct = products[Math.floor(Math.random() * products.length)]
    return randomProduct.id
}

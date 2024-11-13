import {Context, createMockContext, MockContext} from "../../../src/prisma/context";
import {PrismaClient} from "@prisma/client";
import req from "supertest";

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
        orderItem: [
            {
                id: await getRandomProductId(),
                quantity: Math.floor(Math.random() * 10)
            },
            {
                id: await getRandomProductId(),
                quantity: Math.floor(Math.random() * 10)
            },
            {
                id: await getRandomProductId(),
                quantity: Math.floor(Math.random() * 10)
            }
        ]
    }

    let res = await req("localhost:5000").post('/api/orders').send(order)
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

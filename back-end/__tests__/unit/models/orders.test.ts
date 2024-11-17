import {Context, createMockContext, MockContext} from "../../../src/prisma/context";
import {PrismaClient} from "@prisma/client";
import req from "supertest";
import {OrderItemResponse} from "../../../src/models/orders/ordersDto";

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

    let res = await req("localhost:5000").post('/api/orders').send(order)
    expect(res.status).toBe(201)
    expect(res.body.message).toBe('Order created successfully')

    order.userId = ""
    res = await req("localhost:5000").post('/api/orders').send(order)
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

test('[GET] /api/orders/:id', async () => {
    let orderId = await getRandomOrderId()
    let res = await req("localhost:5000").get(`/api/orders/${orderId}`)
    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
        id: expect.any(String),
        totalPrice: expect.any(Number),
        status: expect.any(String),
        createdAt: expect.any(String),
        orderItem: expect.any(Array<OrderItemResponse>)
    })

    orderId = "invalid_id"
    res = await req("localhost:5000").get(`/api/orders/${orderId}`)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Order not found')

})

test('[PUT] /api/orders/:id', async () => {
    let orderId = await getRandomOrderId()
    let status = "Em Andamento"
    let res = await req("localhost:5000").put(`/api/orders/${orderId}`).send({status})
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Order updated successfully')

    status = ""
    res = await req("localhost:5000").put(`/api/orders/${orderId}`).send({status})
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('status is a required field')

    status = "invalid_status"
    res = await req("localhost:5000").put(`/api/orders/${orderId}`).send({status})
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Invalid status')

    orderId = "invalid_id"
    status = "Em Andamento"
    res = await req("localhost:5000").put(`/api/orders/${orderId}`).send({status})
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Order not found')

    orderId = ""
    res = await req("localhost:5000").put(`/api/orders/${orderId}`).send({status})
    expect(res.status).toBe(404)

})

test('[DELETE] /api/orders/:id', async () => {
    let orderId = await getRandomOrderId()
    let res = await req("localhost:5000").delete(`/api/orders/${orderId}`)
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Order deleted successfully')

    res = await req("localhost:5000").delete(`/api/orders/${orderId}`)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Order not found')

    orderId = "invalid_id"
    res = await req("localhost:5000").delete(`/api/orders/${orderId}`)
    expect(res.status).toBe(400)
    expect(res.body.message).toBe('Order not found')

    orderId = ""
    res = await req("localhost:5000").delete(`/api/orders/${orderId}`)
    expect(res.status).toBe(404)

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

async function getRandomOrderId() {
    let orders = await db.order.findMany({select: {id: true}})
    let randomOrder = orders[Math.floor(Math.random() * orders.length)]
    return randomOrder.id
}

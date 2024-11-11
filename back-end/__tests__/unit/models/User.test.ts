import req from 'supertest'
import server from "../../../src/server";

import { MockContext, Context, createMockContext } from '../../../src/prisma/context'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
})

test('should return an object containing all users', async () => {
    const res = await req(server).get('/api/users')
    expect(res.status).toBe(200)
    expect(res.body).toEqual({users: []})
}  )
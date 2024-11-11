import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended/lib/Mock'
import db from "@/prisma/client";

jest.mock('@/prisma/client', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
    mockReset(prismaMock)
})

export const prismaMock = db as unknown as DeepMockProxy<PrismaClient>
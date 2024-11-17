import {OrderDtoRequest, OrderDtoResponse} from "@/models/orders/ordersDto";
import db from "@/prisma/client";
import {Order, OrderItem} from "@prisma/client";

const createOrder = async (newOrder: OrderDtoRequest): Promise<Order> => {
    let totalPrice = 0;
    let orderItems = newOrder.OrderItem;

    for (let orderItem of orderItems) {
        const product = await db.product.findUnique({
            where: {
                id: orderItem.productId
            }
        })

        if (!product) {
            throw new Error('Product not found')
        }

        totalPrice += product.price * orderItem.quantity
    }

    try {
        return await db.order.create({
            data: {
                userId: newOrder.userId,
                status: 'Pendente',
                totalPrice: totalPrice,
                OrderItem: {
                    createMany: {
                        data: orderItems as OrderItem[]

                    }
                }
            }
        });
    } catch (e) {
        throw new Error('Error creating order');
    }
}

const updateOrder = async (orderId: string, status: string) => {
    try {
        await db.order.update({
            where: {
                id: orderId
            },
            data: {
                status: status
            }
        });
    } catch (e) {
        throw new Error('Order not found');
    }
}

const getOrderById = async (orderId: string): Promise<OrderDtoResponse> => {
    const dbOrder = await db.order.findUnique({
        where: {
            id: orderId
        },
        include: {
            OrderItem: {
                include: {
                    product: true
                }
            }
        }
    });

    if (!dbOrder) {
        throw new Error('Order not found');
    }

    return {
        id: dbOrder.id,
        totalPrice: dbOrder.totalPrice,
        status: dbOrder.status,
        createdAt: dbOrder.createdAt.toISOString(),
        orderItem: dbOrder.OrderItem.map(orderItem => {
            return {
                name: orderItem.product.name,
                quantity: orderItem.quantity,
                price: orderItem.product.price
            }
        })
    } as OrderDtoResponse;

}

const deleteOrder = async (orderId: string) => {
    try {
        await db.order.delete({
            where: {
                id: orderId
            }
        });
    } catch (e) {
        throw new Error('Order not found');
    }

}
export const ordersRepo = {
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder
}
import {OrdersDtoRequest} from "@/models/orders/ordersDto";
import db from "@/prisma/client";
import {Order, OrderItem} from "@prisma/client";

const createOrder = async (newOrder: OrdersDtoRequest): Promise<Order> => {
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

    return db.order.create({
        data: {
            userId: newOrder.userId,
            totalPrice: totalPrice,
            status: 'PENDENTE',
            OrderItem: {
                createMany: {
                    data: orderItems as OrderItem[]

                }
            }
        }
    });
}
export const ordersRepo = {
    createOrder
}
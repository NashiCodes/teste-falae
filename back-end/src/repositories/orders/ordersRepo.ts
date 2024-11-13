import {OrdersDtoRequest} from "@/models/orders/ordersDto";
import db from "@/prisma/client";

const createOrder = async (newOrder: OrdersDtoRequest) => {
    let totalPrice = 0;

    let order = await db.order.create({
        data: {
            userId: newOrder.userId,
            totalPrice: totalPrice,
            status: 'Pendente'
        }
    })

    for (const orderItem of newOrder.orderItem) {
        let dbProduct = await db.product.findUnique({
            where: {
                id: orderItem.id
            }
        })

        if (!dbProduct) throw new Error('Product not found')

        await db.orderItem.create({
            data: {
                orderId: order.id,
                productId: dbProduct.id,
                quantity: orderItem.quantity
            }
        })

        totalPrice += dbProduct.price * orderItem.quantity
    }

    await db.order.update({
        where: {
            id: order.id
        },
        data: {
            totalPrice: totalPrice
        }
    })

}
export const ordersRepo = {
    createOrder
}
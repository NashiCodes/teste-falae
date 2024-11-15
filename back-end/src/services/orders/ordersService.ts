import {OrdersDtoRequest} from "@/models/orders/ordersDto";
import {ordersRepo} from "@/repositories/orders/ordersRepo";

const createOrder = async (order: OrdersDtoRequest) => {
    if (order.userId === '' || !order.userId) throw new Error('User id is required');
    if (!order.OrderItem || order.OrderItem.length === 0) throw new Error('OrderItem is a required field');
    for (let orderItem of order.OrderItem) {
        if (orderItem.productId === '' || !orderItem.productId) throw new Error('productId is a required field');
        if (orderItem.quantity <= 0) throw new Error('quantity must be greater than or equal to 1');
    }

    return await ordersRepo.createOrder(order);
}

export const ordersService = {
    createOrder
}
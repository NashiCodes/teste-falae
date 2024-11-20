import {OrderDtoRequest} from "@/models/orders/ordersDto";
import {ordersRepo} from "@/repositories/orders/ordersRepo";

const createOrder = async (order: OrderDtoRequest) => {
    if (order.userId === '' || !order.userId) throw new Error('userId is a required field');
    if (!order.OrderItem || order.OrderItem.length === 0) throw new Error('OrderItem is a required field');
    for (let orderItem of order.OrderItem) {
        if (orderItem.productId === '' || !orderItem.productId) throw new Error('productId is a required field');
        if (orderItem.quantity <= 0) throw new Error('quantity must be greater than or equal to 1');
    }

    return await ordersRepo.createOrder(order);
}

enum Status {
    Pendente = "Pendente",
    EmAndamento = "Em Andamento",
    Entregue = "Entregue"
}

const updateOrder = async (orderId: string, status: string) => {
    if (status === '' || !status) throw new Error('status is a required field');
    if (!(<any>Object).values(Status).includes(status)) throw new Error('Invalid status');

    return await ordersRepo.updateOrder(orderId, status);
}

const getAllOrders = async () => {
    return await ordersRepo.getAllOrders();
}

const getOrderById = async (orderId: string) => {
    if (orderId === '' || !orderId) throw new Error('orderId is a required field');

    return await ordersRepo.getOrderById(orderId);
}

const deleteOrder = async (orderId: string) => {
    if (orderId === '' || !orderId) throw new Error('orderId is a required field');

    return await ordersRepo.deleteOrder(orderId);
}

export const ordersService = {
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrder,
    deleteOrder
}
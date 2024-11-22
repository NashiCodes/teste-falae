import {ordersRepo} from "@/repository/ordersRepo.ts";
import {Order, OrderRegister} from "@/lib/types.ts";

export const getAllOrders = async () => {
    return await ordersRepo.getAllOrders();
}

export const createOrder = async (order: OrderRegister): Promise<Order> => {
    return await ordersRepo.createOrder(order)
}
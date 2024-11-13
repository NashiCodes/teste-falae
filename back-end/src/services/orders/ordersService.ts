import {OrdersDtoRequest} from "@/models/orders/ordersDto";
import {ordersRepo} from "@/repositories/orders/ordersRepo";

const createOrder = async (order: OrdersDtoRequest) => {
    return await ordersRepo.createOrder(order);
}

export const ordersService = {
    createOrder
}
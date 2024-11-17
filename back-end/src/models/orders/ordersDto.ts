import {Product} from "@prisma/client";

interface OrderDtoRequest {
    userId: string,
    OrderItem: Array<OrderItemRequest>
}

interface OrderItemRequest {
    productId: string;
    quantity: number;
    product?: Product
}

interface OrderItemResponse {
    name: string;
    quantity: number;
    price: number;
}

interface OrderDtoResponse {
    id: string,
    totalPrice: number,
    status: string,
    createdAt: string,
    orderItem: OrderItemResponse[]
}

export {OrderDtoRequest, OrderDtoResponse, OrderItemRequest, OrderItemResponse}
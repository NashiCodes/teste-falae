import {Product} from "@prisma/client";

interface OrdersDtoRequest {
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

export {OrdersDtoRequest, OrderDtoResponse, OrderItemRequest, OrderItemResponse}
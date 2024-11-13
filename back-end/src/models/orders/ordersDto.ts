interface OrdersDtoRequest {
    userId: string,
    orderItem: OrderItemRequest[]
}

interface OrderItemRequest {
    id: string;
    quantity: number;
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
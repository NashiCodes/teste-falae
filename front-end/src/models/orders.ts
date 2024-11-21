export interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

export interface Order {
    id: string,
    totalPrice: number,
    status: string,
    createdAt: string,
    orderItem: OrderItem[]
}

export interface OrderRegister {
    userId: string,
    OrderItem: Array<OrderItemRegister>
}

export interface OrderItemRegister {
    productId: string;
    quantity: number;
}


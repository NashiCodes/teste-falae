import {Order, OrderRegister} from "@/lib/types.ts";

const getAllOrders = async () => {
    await fetch('http://localhost:5000/api/orders/').then(async data => {
        localStorage.setItem('orders', JSON.stringify(await data.json()));
    })
}

const createOrder = async (order: OrderRegister): Promise<Order> => {
    const response = await fetch('http://localhost:5000/api/orders/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })

    const data = await response.json();

    if (response.ok) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]') as Order[];
        orders.push(data as Order);
        localStorage.setItem('orders', JSON.stringify(orders));
        return data as Order;
    }

    throw new Error(data.message)

}
export const ordersRepo = {
    getAllOrders,
    createOrder
}
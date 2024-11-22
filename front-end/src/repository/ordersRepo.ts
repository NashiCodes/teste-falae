import {Order, OrderRegister} from "@/lib/types.ts";

const getAllOrders = async () => {
    await fetch('http://localhost:5000/api/orders/').then(async data => {
        localStorage.setItem('clients', JSON.stringify(await data.json()));
    })
}

const createOrder = async (order: OrderRegister): Promise<Order> => {
    const response = await fetch('http://localhost:5000/api/orders/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })

    const data = await response.json();

    if (response.ok) {
        const orders = JSON.parse(localStorage.getItem('orders') || '[]') as Order[];
        const order = await data.json() as Order;
        orders.push(order);
        return order;
    }

    throw new Error(data.message)

}
export const ordersRepo = {
    getAllOrders,
    createOrder
}
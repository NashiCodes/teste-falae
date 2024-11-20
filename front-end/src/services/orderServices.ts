export const fetchOrders = async () => {
    return await fetch('http://localhost:5000/api/orders/').then(data => data.json())
}
import {useEffect, useState} from "react";
import {fetchClients} from "@/services/clientServices.ts";
import {fetchProducts} from "@/services/productServices.ts";
import {fetchOrders} from "@/services/orderServices.ts";
import hamburger from "@/assets/hamburguer.png";
import Pizza from "@/assets/pizza.png";
import Dessert from "@/assets/dessert.png";
import {MainTabs} from "@/components/main-tabs.tsx";
import {Client, Order, Product} from "@/lib/types.ts";

export default function MainContent() {
    const [clients, setClients] = useState([] as Client[])
    const [products, setProducts] = useState([] as Product[])
    const [orders, setOrders] = useState([] as Order[])

    useEffect(() => {
        fetchClients().then(data => {
            setClients(data);
        });

        fetchProducts().then(data => {
            setProducts(data);
        });

        fetchOrders().then(data => {
            setOrders(data);
        });

    }, []);

    return (
        <div className="flex justify-around justify-self-auto h-fit p-5 bg-secondary w-full rounded-2xl">
            <MainTabs clients={clients} products={products} orders={orders}/>
            <div className="relative justify-end">
                <img src={hamburger} alt="hamburger" className="w-80 h-80 relative right-1/4"/>
                <img src={Pizza} alt="pizza" className="w-80 h-80 -mt-20 absolute left-1/2 top-52"/>
                <img src={Dessert} alt="dessert" className="w-80 h-80 absolute right-2/4 top-72"/>
            </div>
        </div>
    )
}

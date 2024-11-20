import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import {useEffect, useState} from "react";
import {fetchClients} from "@/services/clientServices.ts";
import {Client} from "@/models/clients/clients.ts";
import {fetchProducts} from "@/services/productServices.ts";
import {Product} from "@/models/products/products.ts";
import {fetchOrders} from "@/services/orderServices.ts";
import {Order} from "@/models/orders/orders.ts";
import {DataTable} from "@/components/data-table.tsx";
import {ClientColumns} from "@/models/clients/columns.tsx";
import {ProductsCarousel} from "@/models/products/productsCarousel.tsx";
import {OrderColumns} from "@/models/orders/columns.tsx";
import hamburger from "@/assets/hamburguer.png";
import Pizza from "@/assets/pizza.png";
import Dessert from "@/assets/dessert.png";

export default function Home() {
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
        //Div principal
        <div className="flex justify-around justify-self-auto h-fit p-5 m-5">

            {/*Tabs clientes, produtos e pedidos do lado esquerdo        */}
            <Tabs defaultValue="products" className="w-[400px] m-5 justify-items-center">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="clients">Clientes</TabsTrigger>
                    <TabsTrigger value="products">Produtos</TabsTrigger>
                    <TabsTrigger value="orders">Pedidos</TabsTrigger>
                </TabsList>
                <TabsContent value="clients" className="space-y-4 w-fit">
                    <Card>
                        <CardHeader>
                            <CardTitle>Clientes</CardTitle>
                            <CardDescription>
                                Clientes cadastrados no sistema
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <DataTable columns={ClientColumns} data={clients}/>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="products" className="space-y-4 w-fit">
                    <Card>
                        <CardHeader>
                            <CardTitle>Produtos</CardTitle>
                            <CardDescription>
                                Produtos cadastrados no sistema
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ProductsCarousel products={products}/>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="orders" className="space-y-4 w-fit">
                    <Card>
                        <CardHeader>
                            <CardTitle>Pedidos</CardTitle>
                            <CardDescription>
                                Pedidos cadastrados no sistema
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <DataTable columns={OrderColumns} data={orders}/>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>

            {/*Imagens de Comidas do lado direito das tabs*/}
            <div className="relative justify-end">
                {/*One image overlapping the other*/}
                <img src={hamburger}  alt="hamburger" className="w-80 h-80 relative right-1/4"/>
                <img src={Pizza}  alt="pizza" className="w-80 h-80 -mt-20 absolute left-1/2 top-52"/>
                <img src={Dessert} alt="dessert" className="w-80 h-80 absolute right-2/4 top-72" />
            </div>

        </div>
    )
}

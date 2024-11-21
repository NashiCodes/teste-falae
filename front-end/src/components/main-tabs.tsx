import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {DataTable} from "@/components/data-table.tsx";
import {ClientColumns} from "@/components/clients-columns.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ProductsCarousel} from "@/components/productsCarousel.tsx";
import {OrderColumns} from "@/components/orders-columns.tsx";
import {Client, Order, Product} from "@/lib/types.ts";


type tabsProps = {
    clients: Client[],
    products: Product[],
    orders: Order[]
}

export function MainTabs({clients, products, orders}: tabsProps) {
    return (
        <Tabs defaultValue="products" className="w-[400px] m-5 justify-items-center">
            <TabsList className="grid w-full grid-cols-3 bg-primary-foreground">
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
                        <Button>
                            <a href="/clients/register">Registrar cliente</a>
                        </Button>
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
                        <Button>
                            <a href="/products/register">Registrar produto</a>
                        </Button>
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
                        <Button>
                            <a href="/orders/register">Registrar pedido</a>
                        </Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
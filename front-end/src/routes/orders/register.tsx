import SideBar from "@/components/layout-sidebar.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useEffect, useState} from "react";
import {Client, OrderItemRegister, Product} from "@/lib/types.ts";
import {ClientRegisterTable} from "@/components/client-register-table.tsx";
import {ClientColumns} from "@/components/clients-columns.tsx";
import {ProductResgiterTable} from "@/components/product-register-table.tsx";
import {ProductsColumns} from "@/components/products-columns.tsx";
import {createOrder} from "@/services/orderServices.ts";

export function RegisterOrder() {
    const [selectedClient, setSelectedClient] = useState("")
    const [isClientSelected, setIsClientSelected] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState(Array<OrderItemRegister>)
    const clients = JSON.parse(localStorage.getItem("clients") || "[]") as Array<Client>
    const products = JSON.parse(localStorage.getItem("products") || "[]") as Array<Product>

    useEffect(() => {
        if (selectedClient === "") {
            setIsClientSelected(false)
        } else {
            setIsClientSelected(true)
        }

        if (selectedProducts.length !== 0) {
            createOrder({userId: selectedClient, OrderItem: selectedProducts as Array<OrderItemRegister>}).then(r => 
                console.log(r)
            )
        }

    }, [selectedClient])


    return (
        <>
            <SideBar>
                <Card>
                    <CardHeader>
                        <CardTitle>Registrar pedido</CardTitle>
                        <CardDescription>
                            Preencha os campos abaixo para registrar um novo pedido.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!isClientSelected ? (
                            <ClientRegisterTable columns={ClientColumns} data={clients}
                                                 setSelectedClient={setSelectedClient}/>) : (
                            <ProductResgiterTable columns={ProductsColumns} data={products}
                                                  setSelectedProduct={setSelectedProducts}/>
                        )}
                    </CardContent>
                </Card>
            </SideBar>
        </>
    )
}
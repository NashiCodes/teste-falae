import SideBar from "@/components/layout-sidebar.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {Client, OrderItemRegister, OrderRegister, Product} from "@/lib/types.ts";
import {ClientTable} from "@/components/client-table.tsx";
import {ClientColumns} from "@/components/clients-columns.tsx";
import {ProductResgiterTable} from "@/components/product-register-table.tsx";
import {ProductsColumns} from "@/components/products-columns.tsx";
import {Input} from "@/components/ui/input.tsx";
import {verifyUrl} from "@/lib/utils.ts";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Button} from "@/components/ui/button.tsx";
import {createOrder} from "@/services/orderServices.ts";
import {useNavigate} from "react-router-dom";


export function RegisterOrder() {
    const [selectedClient, setSelectedClient] = useState(undefined as unknown as Client)
    const [isClientSelected, setIsClientSelected] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState(Array<Product>)
    const [isProductSelected, setIsProductSelected] = useState(false)
    const clients = JSON.parse(localStorage.getItem("clients") || "[]") as Array<Client>
    const products = JSON.parse(localStorage.getItem("products") || "[]") as Array<Product>
    const [Order, setOrder] = useState(undefined as unknown as OrderRegister)
    const [OrderItems, setOrderItem] = useState(Array<OrderItemRegister>)
    let navigate = useNavigate()


    useEffect(() => {
        if (selectedClient) {
            setIsClientSelected(true)
        } else {
            setIsClientSelected(false)
        }

        if (selectedProducts.length !== 0) {
            setIsProductSelected(true)
        }

    }, [selectedClient, selectedProducts])

    useEffect(() => {
        if (Order) {
            createOrder(Order).then(async r => {
                if (r) {
                    alert("Pedido registrado com sucesso")
                    navigate("/")
                }
            }).catch(e => {
                alert("Erro ao registrar pedido")
                alert(e.message)
            })
        }

    }, [Order]);

    const handleSubmit = () => {
        const order: OrderRegister = {
            userId: selectedClient.id,
            OrderItem: OrderItems
        }
        setOrder(order)
    }

    const handleQuantity = (event: ChangeEvent<HTMLInputElement>, product: Product) => {
        const quantity = parseInt(event.target.value)
        setOrderItem((prev) => {
                const index = prev.findIndex((item) => item.productId === product.id)
                if (index === -1) {
                    return [...prev, {productId: product.id, quantity: quantity}]
                } else {
                    prev[index].quantity = quantity
                    return prev
                }
            }
        )
    }


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
                    <CardContent className="space-y-3 justify-center">
                        {!isClientSelected ? (
                            <ClientTable columns={ClientColumns} data={clients}
                                         setSelectedClient={setSelectedClient}/>) : (
                            <>
                                {!isProductSelected ?
                                    (<ProductResgiterTable columns={ProductsColumns} data={products}
                                                           setSelectedProduct={setSelectedProducts}/>) :
                                    (<>
                                        <h1>Cliente selecionado: {selectedClient.name}</h1>
                                        <Carousel className="w-full max-w-xs">
                                            <CarouselContent>
                                                {
                                                    selectedProducts.map((product: Product) => {
                                                        return (
                                                            <CarouselItem key={product.id}>
                                                                <Card>
                                                                    <CardContent>
                                                                        {
                                                                            verifyUrl(product.imageUrl) ?
                                                                                <img src={product.imageUrl}
                                                                                     alt={product.name}/> :
                                                                                <span>Imagem não disponível</span>
                                                                        }
                                                                        <h1>Nome: {product.name}</h1>
                                                                        <span>Preço: {product.price}</span>
                                                                        <Input
                                                                            placeholder="Quantidade"
                                                                            onChange={(event) => handleQuantity(event, product)}
                                                                        />
                                                                    </CardContent>
                                                                </Card>
                                                            </CarouselItem>
                                                        )
                                                    })
                                                }
                                            </CarouselContent>
                                            <CarouselPrevious/>
                                            <CarouselNext/>
                                        </Carousel>
                                        <Button
                                            className="w-full"
                                            onClick={handleSubmit}
                                        >
                                            Registrar pedido
                                        </Button>
                                    </>)}
                            </>
                        )}
                    </CardContent>
                </Card>
            </SideBar>
        </>
    )
}
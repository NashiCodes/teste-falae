import SideBar from "@/components/layout-sidebar.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

export function EditOrders() {
    return (
        <>
            <SideBar>
                <Card className="h-fit w-max">
                    <CardHeader>
                        <CardTitle>Editar Pedidos</CardTitle>
                        <CardDescription>
                            Selecione um pedido para editar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p>
                            *TODO: Tabela com os pedidos*
                        </p>
                        <p>
                            Clique no botão abaixo para saber mais
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={() => {
                                alert("O Backend suporta a edição de produtos, mas a interface ainda não foi" +
                                    " implementada. 🥲")
                            }}
                        >
                            editar
                        </Button>
                    </CardFooter>
                </Card>
            </SideBar>
        </>
    )
}

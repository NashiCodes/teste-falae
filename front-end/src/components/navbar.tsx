import falaeIcon from '../assets/falae-icon.png'
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger,} from "@/components/ui/menubar"


export default function Navbar() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center p-3 md:px-10 px-10">
            <div className="flex items-center space-x-4">
                <a href="/" className="text-lg font-semibold">
                    <img src={falaeIcon} alt="Logo" className="h-12"/>
                </a>
            </div>
            <nav className="flex-grow flex justify-end space-x-4 max-w-screen-2xl">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Clientes</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="/clients/register">Registrar um cliente</a>
                            </MenubarItem>
                            <MenubarItem>
                                <a href="/clients/edit">Editar cliente</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Produtos</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="/products/register">Registrar um produto</a>
                            </MenubarItem>
                            <MenubarItem>
                                <a href="/products/edit">Editar produto</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Pedidos</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <a href="/orders/register">Registrar um pedido</a>
                            </MenubarItem>
                            <MenubarItem>
                                <a href="/orders/edit">Editar pedido</a>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </nav>

        </header>
    )
}

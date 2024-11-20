import falaeIcon from '../assets/falae-icon.png'
export default function Navbar() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center p-3 md:px-10 px-10">
            <div className="flex items-center space-x-4">
                <img src={falaeIcon} alt="Logo" className="h-12"/>
            </div>
            <nav className="flex-grow flex justify-end space-x-4 max-w-screen-2xl">
                <a href="/clients" className="text-lg font-semibold">Clientes</a>
                <a href="/products" className="text-lg font-semibold">Produtos</a>
                <a href="/orders" className="text-lg font-semibold">Pedidos</a>
            </nav>

        </header>
    )
}

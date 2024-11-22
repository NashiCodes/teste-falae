import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './routes/root/App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {RegisterClient} from "@/routes/clients/register.tsx";
import {RegisterProduct} from "@/routes/products/register.tsx";
import {RegisterOrder} from "@/routes/orders/register.tsx";
import {fetchClients} from "@/services/clientServices.ts";
import {fetchProducts} from "@/services/productServices.ts";
import {EditProduct} from "@/routes/products/edit.tsx";
import {EditOrders} from "@/routes/orders/edit.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/clients/register",
        element: <RegisterClient/>,
    },
    {
        path: "/products/register",
        element: <RegisterProduct/>,
    },
    {
        path: "/orders/register",
        element: <RegisterOrder/>
    },
    {
        path: "/products/edit",
        element: <EditProduct/>
    },
    {
        path: "/orders/edit",
        element: <EditOrders/>
    }
]);

await fetchClients();
await fetchProducts();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>,
)
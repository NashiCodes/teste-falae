import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './routes/root/App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {RegisterClient} from "@/routes/clients/register.tsx";
import {RegisterProduct} from "@/routes/products/register.tsx";

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
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>,
)
import {SidebarProvider} from "@/components/ui/sidebar"
import {ReactNode} from "react";
import {AppSidebar} from "@/components/custom-sidebar.tsx";

export default function SideBar({children}: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar/>
            <main className="flex items-center justify-center w-full">
                {children}
            </main>
        </SidebarProvider>
    )
}

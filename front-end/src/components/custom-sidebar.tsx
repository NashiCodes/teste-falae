import {Home, LucideHam, PackageOpenIcon, User2} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import FalaeIcon from "@/assets/falae-icon.png"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
        subUrls: []
    },
    {
        title: "Clientes",
        url: "#",
        icon: User2,
        subUrls: [
            {
                url: "/clients/register",
                title: "Registrar cliente"
            },
            {
                url: "/clients/edit",
                title: "Editar cliente"
            }
        ]
    },
    {
        title: "Produtos",
        url: "#",
        icon: LucideHam,
        subUrls: [
            {
                url: "/products/register",
                title: "Registrar produto"
            },
            {
                url: "/products/edit",
                title: "Editar produto"
            }
        ]
    },
    {
        title: "Pedidos",
        url: "#",
        icon: PackageOpenIcon,
        subUrls: [
            {
                url: "/orders/register",
                title: "Registrar pedido"
            },
            {
                url: "/orders/edit",
                title: "Editar pedido"
            }
        ]
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="my-5">
                        <img src={FalaeIcon} alt="Logo" className="h-12"/>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                    {item.subUrls.length > 0 && (
                                        <SidebarMenuSub>
                                            {item.subUrls.map((subItem) => (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <a href={subItem.url}>{subItem.title}</a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

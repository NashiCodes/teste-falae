import {ColumnDef} from "@tanstack/react-table";
import {Order} from "@/models/orders/orders.ts";

export const OrderColumns: ColumnDef<Order>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "createdAt",
        header: "Data de Criação",
    },
    {
        accessorKey: "totalPrice",
        header: "Preço Total",
    },
]

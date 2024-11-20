import {ColumnDef} from "@tanstack/react-table";
import {Client} from "@/models/clients/clients.ts";

export const ClientColumns: ColumnDef<Client>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Telefone",
    },
]

import {ColumnDef} from "@tanstack/react-table";
import {Client} from "@/lib/types.ts";
import {ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export const ClientColumns: ColumnDef<Client>[] = [
    {
        accessorKey: "id",
        header: "Selecionar"
    },
    {
        accessorKey: "name",
        header:
            ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Nome
                        <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                )
            },
    }
    ,
    {
        accessorKey: "email",
        header:
            "Email",
    }
    ,
    {
        accessorKey: "phone",
        header:
            "Telefone",
    }
    ,
]

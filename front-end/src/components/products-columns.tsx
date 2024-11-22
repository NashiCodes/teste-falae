import {ColumnDef} from "@tanstack/react-table";
import {Product} from "@/lib/types.ts";
import {ArrowUpDown} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";

export const ProductsColumns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({table}) => (
            <>
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
                Todos
            </>
        ),
        cell: ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "imageUrl",
        header: "Prévia",
        cell: ({row}) => {
            
            return (
                <img src={row.original.imageUrl} alt={row.original.name} className="h-14"/>
            )
        },
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
    },
    {
        accessorKey: "price",
        header:
            "Preço",
    },
    {
        accessorKey: "category",
        header: "Categoria",
    }
]

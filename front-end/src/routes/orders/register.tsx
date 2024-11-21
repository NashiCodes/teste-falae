import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ProductRegister, toLabels} from "@/lib/types.ts";
import {createProduct} from "@/services/productServices.ts";
import {CustomForm} from "@/components/customForm.tsx";
import SideBar from "@/components/layout-sidebar.tsx";

const formSchema = z.object({
    name: z.string().min(10).max(50),
    price: z.coerce.number().nonnegative(),
    category: z.string().min(5).max(50),
    description: z.string().min(10).max(50),
    imageUrl: z.string().optional(),
});
const schemaToLabels: toLabels[] = [
    {
        name: "name",
        label: "Nome",
        placeholder: "Digite o nome do produto..."
    },
    {
        name: "price",
        label: "Preço",
        placeholder: "Digite o preço do produto..."
    },
    {
        name: "category",
        label: "Categoria",
        placeholder: "Digite a categoria do produto..."
    },
    {
        name: "description",
        label: "Descrição",
        placeholder: "Digite a Descrição do produto..."
    },
    {
        name: "imageUrl",
        label: "Url da imagem do produto",
        placeholder: "Digite a url da imagem do produto..."
    },

]

export function RegisterOrder() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            price: 0,
            category: '',
            description: '',
            imageUrl: '',
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await createProduct(values as ProductRegister)
        } catch (e) {
            alert((e as Error).message);
        }
    }

    return (
        <>
            <SideBar>
                <CustomForm title="Produtos" description="Cadastre um novo produto" formSchema={formSchema} form={form} schemaToLabels={schemaToLabels} onSubmit={onSubmit}/>
            </SideBar>
        </>
    )
}
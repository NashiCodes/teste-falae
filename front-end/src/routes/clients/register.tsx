import SideBar from "@/components/layout-sidebar.tsx";
import {CustomForm} from "@/components/customForm.tsx";
import {clientResgister, toLabels} from "@/lib/types.ts";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createClient} from "@/services/clientServices.ts";

const formSchema = z.object({
    name: z.string().min(10).max(50),
    email: z.string().email().min(10).max(50),
    phone: z.string(),
    address: z.string().min(10).max(50),
});

const schemaToLabels: toLabels[] = [
    {
        name: "name",
        label: "Nome",
        placeholder: "Digite o nome do cliente..."
    },
    {
        name: "email",
        label: "E-mail",
        placeholder: "Digite o email do cliente..."
    },
    {
        name: "address",
        label: "Endereço",
        placeholder: "Digite o endereço do cliente..."
    },
    {
        name: "phone",
        label: "Telefone",
        placeholder: "Digite o telefone do cliente..."
    },

]


export function RegisterClient() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await createClient(values as clientResgister)
        } catch (e) {
            alert((e as Error).message);
        }
    }

    return (
        <>
            <SideBar>
                <CustomForm title="Clients" description="Cadastre um novo cliente" formSchema={formSchema} form={form} schemaToLabels={schemaToLabels} onSubmit={onSubmit}/>
            </SideBar>
        </>
    )
}
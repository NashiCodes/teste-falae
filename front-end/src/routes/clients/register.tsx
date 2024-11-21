import Navbar from "@/components/navbar.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {createClient} from "@/services/clientServices.ts";
import {registerClient} from "@/models/clients.ts";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

const formSchema = z.object({
    name: z.string().min(10).max(50),
    email: z.string().email().min(10).max(50),
    phone: z.string(),
    address: z.string().min(10).max(50),
});

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
            await createClient(values as registerClient)
        } catch (e) {
            alert((e as Error).message);
        }
    }

    return (
        <>
            <Navbar/>
            <div className="flex justify-center bg-accent h-dvh">
                <Tabs defaultValue="clients" className="w-[400px] m-20 justify-items-center">
                    <TabsList className="w-full bg-primary-foreground">
                        <TabsTrigger value="clients">Clientes</TabsTrigger>
                    </TabsList>
                    <TabsContent value="clients" className=" w-fit">
                        <Card>
                            <CardHeader>
                                <CardTitle>Clientes</CardTitle>
                                <CardDescription>
                                    Cadastre um novo cliente
                                </CardDescription>
                            </CardHeader>
                            <CardContent>

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-max">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Nome</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite o nome do cliente" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>E-mail</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite o email do cliente" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="address"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Endereço</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite o endereço do cliente" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Telefone</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Digite o telefone do cliente se existir" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit">Submit</Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
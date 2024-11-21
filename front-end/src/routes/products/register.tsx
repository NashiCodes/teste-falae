import Navbar from "@/components/navbar.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ProductRegister} from "@/lib/types.ts";
import {createProduct} from "@/services/productServices.ts";

const formSchema = z.object({
    name: z.string().min(10).max(50),
    price: z.coerce.number().nonnegative(),
    category: z.string().min(5).max(50),
    description: z.string().min(10).max(50),
    imageUrl: z.string().optional(),
});

export function RegisterProduct() {

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
            <Navbar/>
            <div className="flex justify-center bg-accent h-dvh">
                <Tabs defaultValue="product" className="w-[400px] m-20 justify-items-center">
                    <TabsList className="w-full bg-primary-foreground">
                        <TabsTrigger value="product">Produto</TabsTrigger>
                    </TabsList>
                    <TabsContent value="product" className=" w-fit">
                        <Card>
                            <CardHeader>
                                <CardTitle>Novo produto</CardTitle>
                                <CardDescription>
                                    Cadastre um novo produto
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
                                                        <Input placeholder="Digite o nome do produto" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="price"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Preço</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite o Preço do produto" {...field} type="number" step="any"/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="category"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Categoria</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Digite a categoria do produto" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="description"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Descrição</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Digite a Descrição do produto" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="imageUrl"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Url da imagem do produto</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Digite a url da imagem do produto" {...field} />
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
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {UseFormReturn} from "react-hook-form";
import {z, ZodObject} from "zod";
import {toLabels} from "@/lib/types.ts";


interface CustomFormProps {
    title: string,
    description: string
    formSchema: ZodObject<any>,
    form: UseFormReturn<any>,
    schemaToLabels: toLabels[]
    onSubmit: Function
}


export function CustomForm({formSchema, form, schemaToLabels, onSubmit, title, description}: CustomFormProps) {

    const executeSubmit = (values: z.infer<typeof formSchema>) => {
        onSubmit(values)
    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(executeSubmit)} className="w-max">
                            <div className="mb-2">
                                {
                                    schemaToLabels.map((Element, key) => (
                                        <FormField
                                            key={key}
                                            control={form.control}
                                            name={Element.name}
                                            render={(({field}) => (
                                                <FormItem>
                                                    <FormLabel>{Element.label}</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={Element.placeholder} {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            ))}/>
                                    ))
                                }
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
import {useEffect, useState} from "react";
import {Product} from "@/lib/types.ts";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {ProductsCarousel} from "@/components/productsCarousel.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CategoryComboBox} from "@/components/combobox.tsx";

const productsCategories = (products: Product[]) => {
    const categories = products.map(product => {
        return {
            value: product.category,
            label: product.category
        }
    });
    return categories.filter((category, index, self) =>
        self.findIndex(t => t.value === category.value) === index
    );
}

export default function MainContent() {
    const products = JSON.parse(localStorage.getItem("products") || "[]") as Array<Product>;
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isSelected, setIsSelected] = useState(false);


    useEffect(() => {
        if (selectedCategory === "") {
            setIsSelected(false);
        } else {
            setIsSelected(true);
        }

    }, [selectedCategory]);

    const categories = productsCategories(products);

    return (
        <Card className="h-fit w-max">
            <CardHeader>
                <CardTitle>Produtos</CardTitle>
                <CardDescription>
                    Produtos cadastrados no sistema
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <CategoryComboBox categories={categories} setSelectedCategory={setSelectedCategory}/>
                <ProductsCarousel
                    products={isSelected ? products.filter(product => product.category === selectedCategory) : products}/>
            </CardContent>
            <CardFooter>
                <Button>
                    <a href="/products/register">Registrar produto</a>
                </Button>
            </CardFooter>
        </Card>
    )
}

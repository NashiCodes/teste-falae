import {Card, CardContent} from "@/components/ui/card.tsx"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel.tsx"
import hamburger from "@/assets/hamburguer.png";
import {Product} from "@/lib/types.ts";
import {verifyUrl} from "@/lib/utils.ts";

interface ProductsCarouselProps {
    products: Product[]
}

export function ProductsCarousel({products}: ProductsCarouselProps) {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {
                    products.map((product: Product) => {
                        return (
                            <CarouselItem key={product.id}>
                                <Card>
                                    <CardContent>
                                        {
                                            verifyUrl(product.imageUrl) ?
                                                <img src={product.imageUrl} alt={product.name}/> :
                                                <img src={hamburger} alt={product.name}/>
                                        }
                                        <h1>Nome: {product.name}</h1>
                                        <p>Descrição: {product.description}</p>
                                        <span>Preço: {product.price}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}

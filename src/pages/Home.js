import { ProductCard } from "../components"
import { useTitle } from "../hooks/useTitle"

export const Home = () => {
    const products = [
        {"id": 1, "name": "Nike Gamma Force", "price": 150, "image": "/assets/images/sample1.jpg"},
        {"id": 2, "name": "Air Jordan 1", "price": 200, "image": "/assets/images/sample2.jpg"},
        {"id": 3, "name": "Converse modern", "price": 250, "image": "/assets/images/sample3.jpg"},
        {"id": 4, "name": "Nike Air Max", "price": 310, "image": "/assets/images/sample4.jpg"},
        {"id": 5, "name": "Nike Dunk low", "price": 170, "image": "/assets/images/sample5.jpg"},
        {"id": 6, "name": "Air jordan 4", "price": 270, "image": "/assets/images/sample6.jpg"}
    ]

    useTitle("Home");

  return (
    <main>
        <section className="products">
        {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </section>
    </main>
  )
}

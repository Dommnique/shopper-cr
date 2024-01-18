import { CartCard } from "../components"
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";

export const Cart = () => {

  useTitle("Cart");
  const {total, cartList} = useCart();


  return (
    <main className="cart">
      <h1>Cart items: {cartList.length}/ ${total} </h1>
      <section>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

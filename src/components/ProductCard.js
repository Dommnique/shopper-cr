import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
  const {name, price, image, id} = product;
  const { addToCart, removeFromCart, cartList} = useCart();
  const [isInCart, setIsInCart] = useState(false);

useEffect(() => {
  const productInCart = cartList.find(cartItem => cartItem.id === id);

  if(productInCart){
    setIsInCart(true)
  }else{
    setIsInCart(false)
  }
}, [cartList, id])

return (
  <div className="productCard">
      <img src={image} alt={name} />
  
      <h1 className="name">{name}</h1>

      <div className="action">
        <p>${price}</p>
        
        { isInCart ? <button className="remove" onClick={() => removeFromCart(product)}>Remove</button> : <button onClick={() => addToCart(product)}>Add to Cart</button>}
      </div>
    </div>
)
}

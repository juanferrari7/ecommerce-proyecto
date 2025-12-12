import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart")
    return saved ? JSON.parse(saved) : []
  })


  // Cargamos el carrito desde el localStorage al abrir la pagina
  useEffect(() => {
    const saved = localStorage.getItem("cart")
    if(saved) setCart(JSON.parse(saved))
  },[])

    // Guardar carrito cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

    const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}


import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(["Product1", "Product 2", "Product 3"]);

  const submit = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Cart cartItems={cart} handleClick={submit} />
    </>
  );
}

export default App;

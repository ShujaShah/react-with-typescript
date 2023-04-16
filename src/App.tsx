import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

// function App() {
//   const [cart, setCart] = useState(["Product1", "Product 2", "Product 3"]);

//   const submit = () => {
//     setCart([]);
//   };

//   return (
//     <>
//       <Navbar cartCount={cart.length} />
//       <Cart cartItems={cart} handleClick={submit} />
//     </>
//   );
// }

// object Properties Updation exercise
// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "shuja",
//     },
//   });

//   const updatedPlayer = () => {
//     setGame({ ...game, player: { name: "Shuja Shah" } });
//   };

//   return (
//     <>
//       <button onClick={updatedPlayer}>Update</button>
//     </>
//   );
// }

// Updating the array
// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepporoni",
//     toppings: ["Mushroom"],
//   });

//   const updatedPizza = () => {
//     setPizza({ ...pizza, toppings: ["Cheese"] });
//   };

//   return (
//     <>
//       <button onClick={updatedPizza}>Update</button>
//     </>
//   );
// }

function App() {
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const updatedCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => (item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item)),
    });
  };

  return (
    <>
      <button onClick={updatedCart}>Update</button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableTextArea from "./components/ExpandableTextArea";

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

// function App() {
//   const [cart, setCart] = useState({
//     discount: 1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   // here we need to update the product 1's quantity after clicking on the button
//   const updatedCart = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) => (item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item)),
//     });
//   };

//   return (
//     <>
//       <button onClick={updatedCart}>Update</button>
//     </>
//   );
// }

//Expandable Text Area Example
function App() {
  return (
    <>
      <ExpandableTextArea maxChars={100}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique harum exercitationem nam illo. Accusamus
        officia sed ad natus quae hic, saepe aperiam nostrum veniam laudantium, est, veritatis fuga iusto voluptates
        blanditiis pariatur ex soluta corporis vero! Quae similique possimus quam dolorem sequi, natus ducimus tempore
        rem impedit mollitia odio facilis, molestiae quod. Et accusantium quod nostrum voluptatum sunt neque
        consequuntur alias facilis veritatis architecto ratione, quaerat praesentium dolor delectus velit unde nobis
        ipsum tempora dicta! Delectus veniam id atque soluta expedita. Quas fugiat nobis consequatur assumenda
        voluptatem quaerat molestias. Voluptatibus, maxime sint labore tempore hic adipisci ipsum vero sapiente quod.
      </ExpandableTextArea>
    </>
  );
}

export default App;

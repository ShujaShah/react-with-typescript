interface Props {
  cartItems: string[];
  handleClick: () => void;
}
const Cart = ({ cartItems, handleClick }: Props) => {
  return (
    <>
      <p>Cart Items: </p>
      <ul>
        {cartItems.map((item) => (
          <li key="item">{item}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Clear </button>
    </>
  );
};

export default Cart;

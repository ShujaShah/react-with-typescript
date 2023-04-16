interface Props {
  cartCount: number;
}
const Navbar = ({ cartCount }: Props) => {
  return (
    <div>
      <p>Count: {cartCount}</p>
    </div>
  );
};

export default Navbar;

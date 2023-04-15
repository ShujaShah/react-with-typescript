interface Props {
  children: string;
  color?: string;
  onSubmit: () => void;
}
const Button = ({ children, onSubmit, color='success' }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onSubmit}>
        {children}
      </button>
    </div>
  );
};

export default Button;

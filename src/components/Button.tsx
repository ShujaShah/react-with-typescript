interface Props {
  children: string;
  color?: string; // setting color to optional because we are using a default value here
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

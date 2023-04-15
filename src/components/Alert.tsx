import { ReactNode } from "react";

interface Props {
    children: ReactNode; // to pass the html syntax as children we use react node.
}

const Alert = ({children}: Props) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {children}
      </div>
    </div>
  );
};

export default Alert;

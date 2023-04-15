import { Children, ReactNode, useState } from "react";

interface Props {
  children: ReactNode; // to pass the html syntax as children we use react node.
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default Alert;

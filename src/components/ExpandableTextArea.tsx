import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableTextArea = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children.substring(0, maxChars) : children;

  return (
    <p>
      {" "}
      {text}...<button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "More" : "Less"}</button>
    </p>
  );
};

export default ExpandableTextArea;

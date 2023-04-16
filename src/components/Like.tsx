import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onSubmit: () => void;
}

const Like = ({ onSubmit }: Props) => {
  const [liked, setLiked] = useState(true);

  const toggle = () => {
    setLiked(!liked);
    onSubmit();
  };
  if (liked) {
    return (
      <>
        <AiFillHeart color="#ff6b81" size="20" onClick={toggle} />
      </>
    );
  } else
    return (
      <>
        <AiOutlineHeart size="20" onClick={toggle} />
      </>
    );
};

export default Like;

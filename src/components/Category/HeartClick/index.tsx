import { useState } from "react";
import * as Styled from "./HeartClick.styles";
import HeartSVGComponent from "./HeartIcon";

type HeartClickProps = {
  likes: number;
  likes_clicked: boolean;
};

const HeartClick = ({ likes, likes_clicked }: HeartClickProps) => {
  const [clicked, setClicked] = useState<boolean>(likes_clicked);
  const [like, setLike] = useState<number>(likes);

  const handleHeartClick = () => {
    setClicked((prev) => !prev);
    if (!clicked) {
      setLike((prev) => prev - 1);
    } else {
      setLike((prev) => prev + 1);
    }
  };

  return (
    <Styled.CategorySvgWrapper onClick={handleHeartClick}>
      <HeartSVGComponent clicked={!clicked} />
      <Styled.CategorySvgText>{like}</Styled.CategorySvgText>
    </Styled.CategorySvgWrapper>
  );
};

export default HeartClick;

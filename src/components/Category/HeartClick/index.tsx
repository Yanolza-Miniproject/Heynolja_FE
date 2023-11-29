import { useState } from "react";
import * as Styled from "./HeartClick.styles";
import HeartSVGComponent from "./HeartIcon";
import { useWishControl } from "../../../hooks/useWishControl";
import { HeartClickProps } from "./HeartClick.types";

const HeartClick = ({ likes, likes_clicked }: HeartClickProps) => {
  const [clicked, setClicked] = useState<boolean>(likes_clicked);
  const [like, setLike] = useState<number>(likes);
  const postMutation = useWishControl({ queryFnType: "post" });
  const deleteMutation = useWishControl({ queryFnType: "delete" });

  const accommodationId = "hellohelllo";

  const handleHeartClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setClicked((prev) => !prev);
    if (!clicked) {
      deleteMutation.mutate(accommodationId);
      setLike((prev) => prev - 1);
    } else {
      postMutation.mutate(accommodationId);
      setLike((prev) => prev + 1);
    }
  };

  return (
    <Styled.CategorySvgWrapper id="button" onClick={handleHeartClick}>
      <HeartSVGComponent clicked={!clicked} />
      <Styled.CategorySvgText>{like}</Styled.CategorySvgText>
    </Styled.CategorySvgWrapper>
  );
};

export default HeartClick;

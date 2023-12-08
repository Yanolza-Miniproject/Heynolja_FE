import { useState } from "react";
import * as Styled from "./HeartClick.styles";
import HeartSVGComponent from "./HeartIcon";
import { useWishControl } from "../../../hooks/useWishControl";
import { HeartClickProps } from "./HeartClick.types";

const HeartClick = ({
  likes,
  likesClicked,
  accommodationId,
}: HeartClickProps) => {
  const [clicked, setClicked] = useState<boolean>(likesClicked);
  const [like, setLike] = useState<number>(likes);
  const postMutation = useWishControl({ queryFnType: "post" });
  const deleteMutation = useWishControl({ queryFnType: "delete" });

  const handleHeartClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (clicked) {
      deleteMutation.mutate(accommodationId);
      setClicked((prev) => !prev);
      setLike((prev) => prev - 1);
    } else {
      postMutation.mutate(accommodationId);
      setClicked((prev) => !prev);
      setLike((prev) => prev + 1);
    }
  };

  return (
    <Styled.CategorySvgWrapper id="button" onClick={handleHeartClick}>
      <HeartSVGComponent clicked={clicked} />
      <Styled.CategorySvgText>{like}</Styled.CategorySvgText>
    </Styled.CategorySvgWrapper>
  );
};

export default HeartClick;

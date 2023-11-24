import { useState } from "react";
import * as Styled from "./HeartClick.styles";
import HeartSVGComponent from "./HeartIcon";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

type HeartClickProps = {
  likes: number;
  likes_clicked: boolean;
};

const postClickHeart = async (accommodationId: string) => {
  const data = await axios.post(`/api/vi/wish/${accommodationId}`);
  return data.data;
};

const deleteClickHeart = async (accommodationId: string) => {
  const data = await axios.delete(`/api/vi/wish/${accommodationId}`);
  return data.data;
};

const HeartClick = ({ likes, likes_clicked }: HeartClickProps) => {
  const [clicked, setClicked] = useState<boolean>(likes_clicked);
  const [like, setLike] = useState<number>(likes);

  const accommodationId = "hellohelllo";

  const postMutation = useMutation({
    mutationFn: () => postClickHeart(accommodationId),
    onSuccess: (data: { message: string }) => {
      console.log(data);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteClickHeart(accommodationId),
    onSuccess: (data: { message: string }) => {
      console.log(data);
    },
  });

  const handleHeartClick = () => {
    setClicked((prev) => !prev);
    if (!clicked) {
      deleteMutation.mutate();
      setLike((prev) => prev - 1);
    } else {
      postMutation.mutate();
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

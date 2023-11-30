import { useMutation } from "@tanstack/react-query";
import { postClickHeart, deleteClickHeart } from "../api/Category";
import { useNavigate } from "react-router-dom";

// postClickHeart, deleteClickHeart 함수의 매개변수 타입
type WishControlParams = {
  queryFnType: "post" | "delete";
};

// postClickHeart, deleteClickHeart 함수를 담은 객체
const queryFn = {
  post: postClickHeart,
  delete: deleteClickHeart,
};

// 하트 클릭시 즐겨찾기 추가 및 삭제
// accommodationId는 숙소 id, queryFnType은 post 또는 delete
export const useWishControl = ({ queryFnType }: WishControlParams) => {
  const router = useNavigate();
  const mutation = useMutation({
    mutationKey: ["wishControl", queryFnType],
    mutationFn: (accommodationId: string) =>
      queryFn[queryFnType](accommodationId),
    onSuccess: (data: { message: string }) => {
      console.log(data);
    },
    onError: (error) => {
      if (error.message === "Request failed with status code 400") {
        alert("이미 즐겨찾기에 추가된 숙소입니다.");
      }

      if (error.message === "Request failed with status code 401") {
        alert("로그인이 필요합니다.");
        router("/signin");
      }
    },
  });

  return mutation;
};

import { useMutation } from "@tanstack/react-query";
import { postClickHeart, deleteClickHeart } from "../api/Category";

// postClickHeart, deleteClickHeart 함수의 매개변수 타입
type WishControlParams = {
  accommodationId: string;
  queryFnType: "post" | "delete";
};

// postClickHeart, deleteClickHeart 함수를 담은 객체
const queryFn = {
  post: postClickHeart,
  delete: deleteClickHeart,
};

// 하트 클릭시 즐겨찾기 추가 및 삭제
// accommodationId는 숙소 id, queryFnType은 post 또는 delete
export const useWishControl = ({
  accommodationId,
  queryFnType,
}: WishControlParams) => {
  const mutation = useMutation({
    mutationKey: ["wishControl", queryFnType, accommodationId],
    mutationFn: () => queryFn[queryFnType](accommodationId),
    onSuccess: (data: { message: string }) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return mutation;
};

import { useQuery } from "@tanstack/react-query";
import { getMyWishList } from "../api/MyPage";

type useAllGetAxiosType = {
  queryKey: string;
};

type UseAllGetAxiosInterface = {
  [key: string]: () => Promise<void>;
};

const useAllGetAxios: UseAllGetAxiosInterface = {
  wish: getMyWishList,
};

export const useAllGetQuery = ({ queryKey }: useAllGetAxiosType) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: useAllGetAxios[queryKey],
  });

  return { data, isLoading, error };
};

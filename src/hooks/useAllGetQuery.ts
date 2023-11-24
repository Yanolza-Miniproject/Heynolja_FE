import { useQuery } from "@tanstack/react-query";

export const useAllGetQuery = (queryKey: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => {
      return fetch(queryKey);
    },
  });

  return { data, isLoading, error };
};

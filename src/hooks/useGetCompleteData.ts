import { useQuery } from "@tanstack/react-query";
import { authInstance } from "./useAxios";

export const useGetCompleteData = (id: string) => {
  return useQuery({
    queryFn: () => authInstance.get(`/payment/${id}`),
    queryKey: ["complete"],
  });
};

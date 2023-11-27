import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetCompleteData = (id: string) => {
  return useQuery({
    queryFn: () => axios.get(`/api/v1/payment/${id}`),
    queryKey: ["cart"],
  });
};

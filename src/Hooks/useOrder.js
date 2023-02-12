import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useOrder = () => {
  const getOrder = async () => {
    const { data } = await axios.get("https://bored-yoke-bee.cyclic.app/api/v1/order");
    return data;
  };
  const {
    data: Orders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Order"],
    queryFn: getOrder,
  });
  return [Orders, isLoading, refetch];
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useMyOrder = () => {
  const getOrder = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/user/superadmin@superadmin.com/orders");
    return data.data;
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

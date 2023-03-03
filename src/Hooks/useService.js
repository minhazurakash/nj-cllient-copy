import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useService = () => {
  const getService = async () => {
    const { data } = await axios.get("https://api.websitesprofessional.com/api/v1/service");
    return data;
  };
  const {
    data: Service,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Service"],
    queryFn: getService,
  });
  return [Service, isLoading, refetch];
};

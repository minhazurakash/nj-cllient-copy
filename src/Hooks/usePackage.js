import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const usePackage = () => {
  const getPackage = async () => {
    const { data } = await axios.get("https://bored-yoke-bee.cyclic.app/api/v1/package");
    return data;
  };
  const {
    data: Packages,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Package"],
    queryFn: getPackage,
  });
  return [Packages, isLoading, refetch];
};

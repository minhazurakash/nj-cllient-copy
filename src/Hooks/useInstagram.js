import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useInstagram = () => {
  const getPackage = async () => {
    const { data } = await axios.get("https://bored-yoke-bee.cyclic.app/api/v1/instagram");
    return data;
  };
  const {
    data: Instagram,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Instagram"],
    queryFn: getPackage,
  });
  return [Instagram, isLoading, refetch];
};

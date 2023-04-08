import axios from "axios";
import { useQuery } from "react-query";
export const useProfile = (email) => {
  const getProfile = async (email) => {
    const { data } = await axios.get(`https://api.websitesprofessional.com/api/v1/user/${email}`);
    return data;
  };
  const {
    data: Profiles,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Profile"],
    queryFn: getProfile,
  });
  return [Profiles, isLoading, refetch];
};

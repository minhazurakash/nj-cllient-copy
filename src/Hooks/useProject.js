import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useProject = () => {
  const getProject = async () => {
    const { data } = await axios.get("https://api.websitesprofessional.com/api/v1/project");
    return data;
  };
  const {
    data: Projects,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Project"],
    queryFn: getProject,
  });
  return [Projects, isLoading, refetch];
};

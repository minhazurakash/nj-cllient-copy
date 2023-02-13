import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useBlog = () => {
  const getBlogs = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/blog");
    return data;
  };
  const {
    data: Blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Blogs"],
    queryFn: getBlogs,
  });
  return [Blogs, isLoading, refetch];
};

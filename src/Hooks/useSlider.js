import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useSlider = () => {
  const getSlider = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/slider");
    return data;
  };
  const {
    data: Sliders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Slider"],
    queryFn: getSlider,
  });
  return [Sliders, isLoading, refetch];
};

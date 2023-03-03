import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useContact = () => {
  const getContact = async () => {
    const { data } = await axios.get("https://api.websitesprofessional.com/api/v1/Contact");
    return data;
  };
  const {
    data: Contacts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Contact"],
    queryFn: getContact,
  });
  return [Contacts, isLoading, refetch];
};

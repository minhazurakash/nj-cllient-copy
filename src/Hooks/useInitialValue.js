import { useEffect, useState } from "react";
export const useInitialValue = (packageName, id) => {
  const [Package, setPackage] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://bored-yoke-bee.cyclic.app/api/v1/${packageName}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPackage(data?.data);
      });
  }, []);
  return [Package, loading];
};

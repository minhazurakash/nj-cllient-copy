import { useEffect, useState } from "react";
export const useSinglePackage = (id) => {
  const [Package, setPackage] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/package/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPackage(data?.data);
      });
  }, []);
  return [Package, loading];
};

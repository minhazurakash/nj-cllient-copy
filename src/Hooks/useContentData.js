import { useEffect, useState } from 'react';

export const useContentData = () => {
  const [contentData, setContentData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.websitesprofessional.com/api/v1/content/641da964fe0d23ca3d1ec900`)
      .then((res) => res.json())
      .then((data) => {
        setContentData(data?.data);
        setIsLoading(false);
      });
  }, []);

  return { contentData, isLoading };
};



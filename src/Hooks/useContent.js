import React, { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext({});

export const ContentProvider = ({ children }) => {
  const [contentData, setContentData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.websitesprofessional.com/api/v1/content/641da964fe0d23ca3d1ec900`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setContentData(data?.data);
      });
  }, []);

  return (
    <ContentContext.Provider value={{ contentData, loading }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);

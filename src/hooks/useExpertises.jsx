import { useState, useEffect } from "react";
import api from "../api/axios"; // ez a te axios instance-od!
import { useTranslation } from "react-i18next";

export function useExpertises() {
  const [expertises, setExpertises] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    setLoading(true);
    api
      .get(`/api/area-of-expertise?lang=${i18n.language}`)
      .then((res) => {
        setExpertises(res.data);
      })
      .catch(() => setExpertises([]))
      .finally(() => setLoading(false));
  }, [i18n.language]); // fontos, hogy újratöltse a nyelvváltáskor!

  return { expertises, loading };
}

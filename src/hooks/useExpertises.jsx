import { useState, useEffect } from "react";

export function useExpertises() {
  const [expertises, setExpertises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        name: "Urologist",
        description: "Urology is a part of health care that deals with diseases...",
        image: "/images/Urologia.jpg"
      },
      {
        id: 2,
        name: "Psychologist",
        description: "Psychology is a scientific field that studies...",
        image: "/images/Psychologist.jpg"
      },
      // stb.
    ];

    // Simuláció
    setTimeout(() => {
      setExpertises(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  return { expertises, loading };
}

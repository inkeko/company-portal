import { useEffect, useState } from "react";

export function useExpertises() {
  const [expertises, setExpertises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔧 Itt most nem fetch-elünk, hanem kézzel beállítjuk az adatokat: még nincs kapcsolat az adatbázissal
    const mockData = [
      {
        id: 1,
        name: "Urologist",
        description:
          "Urology deals with diseases of the urinary tract and male reproductive organs.",
      },
      {
        id: 2,
        name: "Psychologist",
        description:
          "Psychology explores human thoughts, behaviors, and emotions.",
      },
      {
        id: 3,
        name: "Surgeon",
        description:
          "Surgery involves treating medical conditions through operative techniques.",
      },
      {
        id: 4,
        name: "Dentist",
        description:
          "Dentistry focuses on oral cavity and chewing apparatus treatment.",
      },
    ];

    setTimeout(() => {
      setExpertises(mockData);
      setLoading(false);
    }, 800); // 💡 kis szimulált késleltetés
  }, []);

  return { expertises, loading };
}


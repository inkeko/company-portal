import { useState, useEffect } from "react";
import IMAGES from "../IMAGES";

export function useExpertises() {
  const [expertises, setExpertises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const dummyData = [
  {
    id: 1,
    image: IMAGES.urologia,
    name: "Urológia",
    description: "Az urológia a húgyutak és a férfi nemi szervek betegségeivel foglalkozik.",
    },
  {
    id: 2,
     image: IMAGES.psychologist,
    name: "Pszichológia",
    description: "A pszichológia az emberi viselkedés és mentális folyamatok tudománya.",
    },
    {
        id: 3,
        image: IMAGES.surogen,
        name: "Surgeon",
        description:
          "Surgery involves treating medical conditions through operative techniques.",
      },
      {
        id: 4,
        image: IMAGES.dentist,
        name: "Dentist",
        description:
          "Dentistry focuses on oral cavity and chewing apparatus treatment.",
      },
];

    // Simuláció
    setTimeout(() => {
      setExpertises(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  return { expertises, loading };
}

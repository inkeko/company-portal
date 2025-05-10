import { useState, useEffect } from "react";
import urologiaImg from "../assets/images/Urologia.jpg";
import psychologistImg from "../assets/images/Psychologist.jpg";

export function useExpertises() {
  const [expertises, setExpertises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   const dummyData = [
  {
    id: 1,
    name: "Urológia",
    description: "Az urológia a húgyutak és a férfi nemi szervek betegségeivel foglalkozik.",
    image: urologiaImg,
  },
  {
    id: 2,
    name: "Pszichológia",
    description: "A pszichológia az emberi viselkedés és mentális folyamatok tudománya.",
    image: psychologistImg,
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

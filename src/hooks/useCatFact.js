import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState("Lorem impsum");

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };
  // useEffect para obtener el hecho - fact
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}

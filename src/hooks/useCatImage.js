import { useEffect, useState } from "react";
import { getImageToFact } from "../services/facts";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // useEffect para mapear la image para el hecho
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    getImageToFact(threeFirstWords).then((newImageUrl) =>
      setImageUrl(newImageUrl)
    );
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}

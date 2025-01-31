import { loadImage } from "@/utils/Common.utils";
import { useEffect } from "react";

function useBackgroundImage(imagePath?: string) {
  useEffect(() => {
    if (!imagePath) return;
    let isCancelled = false;
    const imageUrl = `https://image.tmdb.org/t/p/w300/${imagePath}`;

    loadImage(imageUrl).then(() => {
      if (isCancelled) return;
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.getElementById("backdrop-overlay")?.classList.add("opacity-80");
    });

    return () => {
      isCancelled = true;
      document
        .getElementById("backdrop-overlay")
        ?.classList.remove("opacity-80");
    };
  }, [imagePath]);
}

export default useBackgroundImage;

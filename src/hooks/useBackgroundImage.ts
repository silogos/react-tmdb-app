import { loadImage, wait } from "@/utils/Common.utils";
import { useEffect } from "react";

function useBackgroundImage(imagePath?: string) {
  useEffect(() => {
    if (!imagePath) return;

    const imageUrl = `https://image.tmdb.org/t/p/w300/${imagePath}`;

    Promise.all([loadImage(imageUrl), wait(300)]).then(() => {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.getElementById("backdrop-overlay")?.classList.add("opacity-80");
    });

    return () => {
      document
        .getElementById("backdrop-overlay")
        ?.classList.remove("opacity-80");
    };
  }, [imagePath]);
}

export default useBackgroundImage;

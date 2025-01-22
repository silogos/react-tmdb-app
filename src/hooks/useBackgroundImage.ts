import { useEffect } from "react";

function useBackgroundImage(imagePath?: string) {
  useEffect(() => {
    if (!imagePath) return;
    async function changeBG() {
      const newImageUrl = `https://image.tmdb.org/t/p/w300/${imagePath}`;
      const img = new Image();
      img.src = newImageUrl;
      img.onload = () => {
        document.body.style.backgroundImage = `url(${newImageUrl})`;
        document
          .getElementById("backdrop-overlay")
          ?.classList.add("opacity-80");
      };
    }

    changeBG();

    return () => {
      document
        .getElementById("backdrop-overlay")
        ?.classList.remove("opacity-80");
    };
  }, [imagePath]);
}

export default useBackgroundImage;

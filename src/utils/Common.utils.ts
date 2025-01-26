export function loadImage(imageUrl: string) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      res(true);
    };
    img.onerror = () => {
      rej();
    };
  });
}

export function wait(timeout: number) {
  return new Promise((res) => setTimeout(res, timeout));
}

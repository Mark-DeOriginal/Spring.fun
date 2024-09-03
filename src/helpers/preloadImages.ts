export default function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const img = document.createElement("img") as HTMLImageElement;
    img.src = url;
  });
}

let kirtanImages = [
  "https://ik.imagekit.io/kirtanchandak/Memxtension/E-m-F7CVcAMFRUC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674207167993",
  "https://ik.imagekit.io/kirtanchandak/Memxtension/w214jlr7xk491.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1674207141918",
  "https://ik.imagekit.io/kirtanchandak/Memxtension/acche-din.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674207097763",
  "https://ik.imagekit.io/kirtanchandak/Memxtension/1C57CAF3-3481-46E5-802B-0A4F43F9D15C.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1674207027247",
  "https://ik.imagekit.io/kirtanchandak/Memxtension/maa-chudi-padi-hai-meme-template.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674206971782",
  "https://ik.imagekit.io/kirtanchandak/Memxtension/main-qimg-eaf0bb06c37c75b4b64956ab1a1e4a99-lq.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1674206945692",
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
  const index = Math.floor(Math.random() * kirtanImages.length);
  image.src = kirtanImages[index];
}

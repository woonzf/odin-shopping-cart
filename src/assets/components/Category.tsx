import imgElectronics from "../img/electronics.png";
import imgJewelery from "../img/jewelery.png";
import imgMensClothing from "../img/mens-clothing.png";
import imgWomensClothing from "../img/womens-clothing.png";

export default function Banner() {
  type bannerItem = {
    name: string;
    src: string;
  };

  const nameCategories: string[] = [
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];
  const imgCategories: string[] = [
    imgMensClothing,
    imgWomensClothing,
    imgJewelery,
    imgElectronics,
  ];
  const categories: bannerItem[] = [];

  for (let i = 0; i < nameCategories.length; i++) {
    const bannerItem: bannerItem = {
      name: nameCategories[i],
      src: imgCategories[i],
    };
    categories.push(bannerItem);
  }

  return <div></div>;
}

declare module "*.png";

type category = {
  id: number;
  name: string;
  src: string;
};

type product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

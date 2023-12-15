export interface IProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrls: {
    productImages: {
      small: string[];
      medium: string[];
      large: string[];
    };
    modelImages: {
      small: string[];
      medium: string[];
      large: string[];
    };
  };
}

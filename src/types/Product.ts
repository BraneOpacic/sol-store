export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string | number | string[];
  };
  additionalInformation: {
    warranty: string;
    ["In the Box"]: string[];
  };
};

export type ProductWithQuantity = Product & { quantity: number };


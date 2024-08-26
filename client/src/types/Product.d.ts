import { Order } from "./Order";
import { ProductType } from "./ProductTypes";

export type Product = {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: ProductType;
  specification: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: [
    { value: number; symbol: "USD"; isDefault: number },
    { value: number; symbol: "UAN"; isDefault: number }
  ];
  order: Order;
  date: string;
};

import { Product } from "@/types/Product";
import axios from "@utils/axios";

const getProducts: () => Promise<Product[]> = async () => {
  try {
    const response = await axios.get("/products", {
      id: "products-list",
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getProducts;

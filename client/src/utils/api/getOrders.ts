import { Order } from "@/types/Order";
import axios from "@utils/axios";

const getOrders: () => Promise<Order[]> = async () => {
  try {
    const response = await axios.get("/orders", {
      id: "orders-list",
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getOrders;

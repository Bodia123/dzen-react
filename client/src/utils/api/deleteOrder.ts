import axios from "@utils/axios";

const deleteOrder: (id: string) => Promise<void> = async (id) => {
  try {
    await axios.delete(`/orders/${id}`, {
      cache: {
        update: {
          "orders-list": "delete",
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};
export default deleteOrder;

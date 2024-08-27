import { Order } from "@/types/Order";
import { Product } from "@/types/Product";
import React from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  order: Order;
  selectedOrder: Order | null;
  setSelectedOrder: (order: Order) => void;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomCard: React.FC<IProps> = ({
  order,
  selectedOrder,
  setSelectedOrder,
  setShowDeleteModal,
}: IProps) => {
  const { t } = useTranslation();

  const selectAndRemove = () => {
    if (selectedOrder?.id !== order.id) {
      setSelectedOrder(order);
    }
    setShowDeleteModal(true);
  };

  return (
    <div
      className={
        "card p-2 mb-3 overflow-hidden " +
        (order.id === selectedOrder?.id ? "border-dark" : "border-light")
      }>
      <div className="d-flex align-items-center justify-content-between ">
        <div
          className="d-flex align-items-center text-truncate flex-grow-1 me-3"
          style={{ width: "150px" }}
          onClick={() => setSelectedOrder(order)}>
          <i className="bi bi-list mr-2" style={{ fontSize: "1.5rem" }}></i>
          <span
            className="font-weight-bold text-truncate"
            style={{ maxWidth: "250px" }}>
            {order.title}
          </span>
        </div>

        <div
          className={"d-flex align-items-center justify-content-between me-3"}
          style={{ minWidth: "400px" }}
          onClick={() => setSelectedOrder(order)}>
          <span className="text-muted">
            {order.products.length} {t("item")}
          </span>
          <span className="text-muted ml-3">{order.date}</span>
          <div className="d-flex flex-column align-items-center">
            <span className="fs-6 ml-3">
              {order.products.reduce(
                (sum, product: Product) => sum + product.price[0].value,
                0
              ) + " USD"}
            </span>
            <span className="fs-5 ml-3">
              {order.products.reduce(
                (sum, product: Product) => sum + product.price[1].value,
                0
              ) + " UAN"}
            </span>
          </div>
        </div>
        <div>
          <button className="btn text-muted p-0" onClick={selectAndRemove}>
            {t("delete")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

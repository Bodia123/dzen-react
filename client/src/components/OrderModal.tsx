import { Order } from "@/types/Order";
import React from "react";
import { useTranslation } from "react-i18next";
import ProductModalItem from "./ProductModalItem";

interface IProps {
  order: Order;
  onClose: () => void;
  deleteCurrentOrder: (id: number) => void;
}

const CustomModal: React.FC<IProps> = ({
  order,
  onClose,
  deleteCurrentOrder,
}: IProps) => {
  const { t } = useTranslation();

  const outsideModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={`modal fade bg-dark bg-opacity-50 ${
        order ? "show d-block" : ""
      } `}
      tabIndex={-1}
      role="dialog"
      onClick={outsideModalClick}>
      <div
        className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
        role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {t("you sure what you want to delete this order")}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {order &&
              order.products.map((product) => (
                <ProductModalItem key={product.id} product={product} />
              ))}
          </div>
          <div className="modal-footer bg-success">
            <button
              type="button"
              className="btn bg-inhibit text-light"
              onClick={onClose}>
              {t("cancel")}
            </button>
            <button
              type="button"
              onClick={() => deleteCurrentOrder(order.id)}
              className="btn btn-danger rounded-pill">
              {t("delete")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

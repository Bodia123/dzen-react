import React from "react";
import CustomModal from "@components/modal/ModalInstance";
import { useTranslation } from "react-i18next";
import ProductModalItem from "@components/ProductModalItem";
import { Order } from "@/types/Order";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  deleteCurrentOrder: (id: number) => void;
  order: Order;
}

const OrderDeleteModal: React.FC<IProps> = ({
  order,
  isVisible,
  onClose,
  deleteCurrentOrder,
}: IProps) => {
  const { t } = useTranslation();

  return (
    <CustomModal
      isVisible={isVisible}
      title={t("you sure what you want to delete this order")}
      onClose={onClose}
      footerActions={
        <>
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
        </>
      }>
      {order &&
        order.products.map((product) => (
          <ProductModalItem key={product.id} product={product} />
        ))}
    </CustomModal>
  );
};

export default OrderDeleteModal;

import { Order } from "@/types/Order";
import OrderItem from "@components/OrderItem";
import getOrders from "@utils/api/getOrders";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LoadingPage from "./LoadingPage";
import deleteOrder from "@utils/api/deleteOrder";

import OrderDeleteModal from "@components/modal/DeleteModal";
import ProductModalItem from "@components/ProductModalItem";
import EmptyTitle from "@components/EmptyTitle";

const IncomingPage: React.FC = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const deleteCurrentOrder = (id: number) => {
    setSelectedOrder(null);
    setShowDeleteModal(false);
    deleteOrder(id.toString()).then(() => {
      getOrders().then((data) => {
        setOrders(data);
      });
    });
  };

  const selectOrder = (order: Order) => {
    if (order.id === selectedOrder?.id) {
      return setSelectedOrder(null);
    }
    setSelectedOrder(order);
  };

  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-start">
        <h2>{t("incoming")} </h2>
      </div>
      <div className="row">
        {orders && orders.length > 0 ? (
          <div
            className={selectedOrder && !showDeleteModal ? "col-7" : "col-12"}>
            {orders.map((order) => (
              <OrderItem
                key={order.id}
                order={order}
                selectedOrder={selectedOrder}
                setSelectedOrder={selectOrder}
                setShowDeleteModal={setShowDeleteModal}
              />
            ))}
          </div>
        ) : (
          <EmptyTitle title={t("noIncoming")} />
        )}

        {selectedOrder && !showDeleteModal && (
          <div className="col-5 border">
            <h3>
              {t("incoming")} #{selectedOrder.id}{" "}
            </h3>
            <h4>{selectedOrder.title}</h4>
            <p>
              {t("date")}: {selectedOrder.date}
            </p>
            <p>
              {t("description")}: {selectedOrder.description}
            </p>

            {selectedOrder.products.map((product) => (
              <ProductModalItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Modal for deleting */}
      {selectedOrder && (
        <OrderDeleteModal
          isVisible={showDeleteModal}
          order={selectedOrder}
          deleteCurrentOrder={deleteCurrentOrder}
          onClose={() => {
            setSelectedOrder(null);
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
};

export default IncomingPage;

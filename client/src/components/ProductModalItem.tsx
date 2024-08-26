import { Product } from "@/types/Product";
import React from "react";

interface IProps {
  product: Product;
}

const ProductModalItem: React.FC<IProps> = ({ product }: IProps) => {
  return (
    <div className="d-flex align-items-center">
      <img
        src={product.photo || "https://via.placeholder.com/80"}
        alt="product"
        className="m-2"
        style={{ width: "80px", height: "80px" }}
      />
      <div className="d-flex flex-column justify-content-center">
        <h5
          className="text-truncate text-center cursor-pointer"
          style={{ width: "300px" }}>
          {product.title}
        </h5>
        <p className="text-truncate text-center" style={{ width: "300px" }}>
          SN-{product.serialNumber}
        </p>
      </div>
    </div>
  );
};

export default ProductModalItem;

import { Product } from "@/types/Product";
import { useTranslation } from "react-i18next";

interface IProps {
  product: Product;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-items-center justify-content-between p-2 w-100 border">
      <img
        src={product.photo || "https://via.placeholder.com/80"}
        alt="product"
        className="m-2"
        style={{ width: "80px", height: "80px" }}
      />
      <div className=" d-flex flex-column justify-content-center">
        <h5
          className="text-truncate text-center cursor-pointer"
          style={{ width: "300px" }}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-custom-class="custom-tooltip"
          data-bs-title="This top tooltip is themed via CSS variables.">
          {product.title}
        </h5>

        <p className="text-truncate text-center" style={{ width: "300px" }}>
          SN-{product.serialNumber}
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ms-2">
        {product.price.map((price) => (
          <p
            key={price.symbol}
            className={price.isDefault ? "fw-bold fs-4" : ""}>
            {price.value} {price.symbol}
          </p>
        ))}
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center ms-2">
        <p>{t("from") + " " + product.guarantee.start}</p>
        <p>{t("to") + " " + product.guarantee.end}</p>
      </div>
    </div>
  );
};

export default ProductItem;

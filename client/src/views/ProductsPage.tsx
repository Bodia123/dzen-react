import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Product } from "@/types/Product";
import { ProductType } from "@/types/ProductTypes";

import getProducts from "@utils/api/getProducts";

import ProductItem from "@components/ProductItem";
import LoadingPage from "./LoadingPage";
import EmptyTitle from "@components/EmptyTitle";

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<ProductType>("All");
  useEffect(() => {
    getProducts().then((data) => {
      setLoading(false);
      setProducts(data);
    });
  });

  const filterProducts = (products: Product[]) => {
    if (filter === "All") return products;
    return products.filter((product) => product.type === filter);
  };

  if (loading) return <LoadingPage />;
  return (
    <div className="container p-5">
      <div className="d-flex justify-content-between">
        <h2>{t("products")} </h2>

        <select
          className="form-select w-25"
          name="filter"
          id="filter"
          onChange={(e) => setFilter(e.target.value as ProductType)}
          defaultValue={"All"}>
          <option value={"All"}>{t("all")}</option>
          <option value="Accessories">{t("accessories")}</option>
          <option value="Monitors">{t("monitors")}</option>
          <option value="Laptops">{t("laptops")}</option>
        </select>
      </div>
      <div className="row gap-3 mt-3">
        {products &&
          (filterProducts(products).length === 0 ? (
            <h3 className="text-center mt-5">{t("noProductsWithSuchType")}</h3>
          ) : (
            filterProducts(products).map((product) => (
              <div className="col-12" key={product.id}>
                <ProductItem product={product} />
              </div>
            ))
          ))}

        {!products && <EmptyTitle title={t("noProducts")} />}
      </div>
    </div>
  );
};

export default ProductsPage;

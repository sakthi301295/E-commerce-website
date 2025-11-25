import React, { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { DiscriptionBox } from "../components/DiscriptionBox/DiscriptionBox";
import { RelatedProducts } from "../components/RelatedProducts/RelatedProducts";

export const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();

  const product = all_product.find((e) => e.id == productId);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DiscriptionBox />
      <RelatedProducts />
    </div>
  );
};

import React, { useContext } from "react";
import "./CSS/Shopcategory.css";
import { ShopContext } from "../components/Context/ShopContext";
import dropdown_icon from "../components/Asset/dropdown_icon.png";
import Item from "../components/Item/Item";

export const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="Shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sortby <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product?.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} {...item} />;
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

import React from "react";
import "./DiscriptionBox.css";

export const DiscriptionBox = () => {
  return (
    <div className="discriptionbox">
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Discription</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="discriptionbox-discription">
        <p>
          A website that allows people to buy and sell physical goods, services,
          and digital products over the internet rather than at a
          brick-and-mortar location. Through an e-commerce website, a business
          can process orders, accept payments, manage shipping and logistics,
          and provide customer service.
        </p>
        <p>
          Ecommerce is the electronic buying and selling of goods and services,
          usually via the internet. Businesses can build their own ecommerce
          website, set up an ecommerce storefront on an established selling site
          like Amazon, or do it all for a multi-channel approach.
        </p>
      </div>
    </div>
  );
};

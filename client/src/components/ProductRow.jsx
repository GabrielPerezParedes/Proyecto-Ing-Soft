import React from 'react';
import sampleImage from "../img/logo.png";

const ProductRow = () => {
  return (
    <div className="row product">
      <div className="col-md-2">
        <img src={sampleImage} alt="Sample Image" height="120" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>Product</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
  );
}

export default ProductRow;
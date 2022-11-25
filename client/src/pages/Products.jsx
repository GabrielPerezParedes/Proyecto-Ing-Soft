import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductList from '../components/ProductList';
//import axios from "axios";

const Products = () => {
    return (
        <div className="container">
          <header className="header">
            <h1>My Products</h1>
            <div className="links">
                <span className="write">
                <Link className="link" to="/write">Agregar Producto</Link>
                </span>
            </div>
          </header>
          <ProductList />            
        </div>
      );
}
export default Products;

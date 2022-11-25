import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=prov">
            <h6>PROVEEDORES</h6>
          </Link>
          {/* <Link className="link" to="/?cat=foro">
            <h6>FORO</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>NOSOTROS</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link> */}
          <Link className="link" to="/products">
            <h6>PRODUCTOS</h6>
          </Link>
          
          <span className="write">
            <Link className="link" to="/login">Log In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

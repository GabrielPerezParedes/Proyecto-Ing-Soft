import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
//import axios from "axios";
//import moment from "moment";
//import { useContext } from "react";
//import { AuthContext } from "../context/authContext";
//import DOMPurify from "dompurify";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-skincare-products-1656081764.jpg?crop=1.00xw:0.503xh;0,0.279xh&resize=1200:*" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/3175983/pexels-photo-3175983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>Gabriel</span>
            <p>Subido hace dos dias </p>
            </div>
            <div className="edit">
              <Link> to={'/write?edit=2'}
              <img src= {Edit} alt="" />
              </Link>
              <img src= {Delete} alt="" />
            </div>
        </div>
        <h1>Descripcion Hola como estas me llamo Brazil do Rio de Janeiro</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;

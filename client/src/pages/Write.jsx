import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
//import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Agregar Producto</h1>
          <span>
            <b>Proveedor: </b> proveedor
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Subir Imagen
          </label>
          <div className="buttons">
            <button>Guardar</button>
            {/* <button onClick={handleClick}>Publish</button> */}
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cat1"}
              name="cat"
              value="cat1"
              id="cat1"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="a">Cat1</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cat2"}
              name="cat"
              value="cat2"
              id="cat2"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cat2">Cat2</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cat3"}
              name="cat"
              value="cat3"
              id="cat3"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cat3">Cat3</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cat4"}
              name="cat"
              value="cat4"
              id="cat4"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cat4">Cat4</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cat5"}
              name="cat"
              value="cat5"
              id="cat5"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cat5">Cat5</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cat6"}
              name="cat"
              value="cat6"
              id="cat6"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cat6">Cat6</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;

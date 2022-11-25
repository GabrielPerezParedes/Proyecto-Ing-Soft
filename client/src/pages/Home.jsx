import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import 'bootstrap/dist/css/bootstrap.css';  
import Carousel from 'react-bootstrap/Carousel';  

//import axios from "axios";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://i.pinimg.com/564x/bb/2b/46/bb2b467e53a10332b7d615ac3993dbfb.jpg",
    },
    {
      id: 4,
      title: "¿Quienes somos? Entérate más de EmpresaGenerica",
      desc: "Por supuesto que estamos orgullosos de quienes somos, déjanos mostrarte toda nuestra historia y sueños...",
      img: "https://i.pinimg.com/564x/49/e2/74/49e27441fb4c73b65ed78cb6e24f6c0f.jpg",
    },
  ];

  return (
    <div className="home">
      <div style={{ display: 'block', width: 1000, padding: 0 }}>   
      <Carousel>  
        <Carousel.Item interval={1500}>  
          <img  
            className="d-block w-100"  
            src="https://i.pinimg.com/564x/fa/74/8d/fa748dac0a77a0b0bd787f67fe6f3809.jpg"  
            alt="Image One"  
          />  
          <Carousel.Caption>  
            <h3>First Slide</h3>  
            <p>Sample Text for first slide</p>  
          </Carousel.Caption>  
        </Carousel.Item>  
        <Carousel.Item interval={1000}>  
          <img  
            className="d-block w-100"  
            src="https://i.pinimg.com/564x/c5/07/c4/c507c4c90ac968f1157d51e9f7626aed.jpg"  
            alt="Image Two"  
          />  
          <Carousel.Caption>  
            <h3>Second Slide</h3>  
            <p>Sample Text for second slide</p>  
          </Carousel.Caption>  
        </Carousel.Item> 
        <Carousel.Item interval={1000}>  
          <img  
            className="d-block w-100"  
            src="https://i.pinimg.com/564x/01/bd/6d/01bd6d8d807eb62ef2446b01c85cc54f.jpg"  
            alt="Image Two"  
          />  
          <Carousel.Caption>  
            <h3>Third Slide</h3>  
            <p>Sample Text for third slide</p>  
          </Carousel.Caption>  
        </Carousel.Item>  
      </Carousel>  
    </div>  
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Home;

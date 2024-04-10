"use client"
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({data}) {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Muestra 4 elementos en pantalla completa
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Muestra 2 elementos en dispositivos medianos
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Muestra 1 elemento en dispositivos pequeños
        },
      },
    ],
  };
  // data = data.slice(0,4)

  return (
    <div className="w-5/6 p-6 m-auto text-center items-center justify-center">
      <Slider {...settings}>
        {data && data.map(e => {
          return <div key={e.id} className="w-64 h-64">
              <img src={e.img} alt={e.name} className=" rounded-full m-auto w-56 h-56 p-2"/>
              <p className="text-white p-2 text-3xl font-medium m-auto">{e.name.toUpperCase()}</p>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default Carousel;



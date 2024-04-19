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
    arrows: true, 
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
    <div className="w-5/6 p-6 m-auto  justify-center">
      <Slider {...settings}>
        {data ? data.map(e => {
          return <div key={e.idEmpleado} className="text-center block w-56 h-56">
            <div className="w-56 m-auto h-56 bg-white flex items-center justify-center rounded-full">
              <img src={e.imagen} alt={e.nombre} className=" rounded-full object-contain h-full w-full "/>
            </div>
              <p className="text-white p-2 text-3xl font-medium ">{e.nombre.toUpperCase()}</p>
          </div>
        }): <img src="https://media1.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b952f5fbka6mi8iznnb5x3u3y3otftzrb5rxyl8f08lf&ep=v1_gifs_search&rid=200w.gif&ct=g"/>}
      </Slider>
    </div>
  );
}

export default Carousel;



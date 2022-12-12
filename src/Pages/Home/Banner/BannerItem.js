import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import './BannerItem.css';
const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="banner-img w-full rounded-xl" alt='' />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4 ">
        <h1 className='text-6xl font-bold text-white'>
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-1/2 w-2/5 ">
        <p className='text-white text-xl'> There are many variations of passages of  available, but the majority have <br /> suffered alteration in some form</p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-3/4 w-2/5 ">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div>
  );
};

export default BannerItem;
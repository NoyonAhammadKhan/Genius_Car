import React from 'react';
import Person from '../../../assets/images/about_us/person.jpg';
import Parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="my-20 hero">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative w-1/2'>
    <img src={Person}  alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
    <img src={Parts} alt="" className="absolute w-3/5 right-5 top-1/2 border-8 w-sm rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl my-5 font-bold text-orange-600'>About Us</p>
      <h1 className="text-5xl my-5 font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-error my-3">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;
import React, { useState } from 'react';
import './Portfolio.css';
import img1 from '../assets/imgs/poert1.png';
import img2 from '../assets/imgs/port2.png';
import img3 from '../assets/imgs/port3.png';

export default function Portfolio() {
  let [selectedImage, setSelectedImage] = useState(null);
  
  function handleImageClick(img){
    setSelectedImage(img); 
  }

  function closeBigLayer(){
    setSelectedImage(null);
  }

  return (
    <div className='container py-5'>
      <h1 className='maincolor text-center fw-bold pt-5 mt-5'>PORTOFOLIO COMPONENT</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='line2 mt-2'></div>
        <i className="fa-solid fa-star mx-3 maincolor"></i>
        <div className='line2 mt-2'></div>
      </div>

      <div className='row mt-5 gy-4'>
        <div className='col-md-4 iteamP' onClick={() => handleImageClick(img1)}>
          <div className='position-relative'>
            <img className='w-100 rounded' src={img1} alt='img1' />
            <div className='layer position-absolute top-0 end-0 rounded d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus fontsize text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4 iteamP' onClick={() => handleImageClick(img2)}>
          <div className='position-relative'>
            <img className='w-100 rounded' src={img2} alt='img2' />
            <div className='layer position-absolute top-0 end-0 rounded d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus fontsize text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4 iteamP' onClick={() => handleImageClick(img3)}>
          <div className='position-relative'>
            <img className='w-100 rounded' src={img3} alt='img3' />
            <div className='layer position-absolute top-0 end-0 rounded d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus fontsize text-white fw-bold"></i>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-5 gy-4'>
        <div className='col-md-4 iteamP' onClick={() => handleImageClick(img1)}>
          <div className='position-relative'>
            <img className='w-100 rounded' src={img1} alt='img1' />
            <div className='layer position-absolute top-0 end-0 rounded d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus fontsize text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4 iteamP' onClick={() => handleImageClick(img2)}>
          <div className='position-relative'>
            <img className='w-100 rounded' src={img2} alt='img2' />
            <div className='layer position-absolute top-0 end-0 rounded d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus fontsize text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className='col-md-4 iteamP' onClick={() => handleImageClick(img3)}>
          <div className='position-relative'>
            <img className='w-100 rounded' src={img3} alt='img3' />
            <div className='layer position-absolute top-0 end-0 rounded d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-plus fontsize text-white fw-bold"></i>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className='BigLayer d-flex position-fixed top-0 end-0 start-0 bottom-0 justify-content-center align-items-center' onClick={closeBigLayer}>
          <div className='Bigimg m-auto d-flex justify-content-center align-content-center'>
            <img src={selectedImage} alt="Selected"  />
          </div>
        </div>
      )}
    </div>
  );
}


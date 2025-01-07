import React from 'react'
import './Middle.css'
import avatar from '../assets/avatar/avataaars\ \(1\).png';
export default function Middle() {

  return (
    <>
      <div className='bg-middle py-5'>
        <div className='container'>
          <div className='mt-5 avatar text-center d-flex justify-content-center align-items-center flex-column' >
            <div className='circle position-relative Margin'>
              <img className=' position-absolute ' src={avatar} alt="avatar" />
            </div>
            <div className='item'>
              <h2 className='text-white fw-bold mt-4'>START FRAMEWORK</h2>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='line mt-2'></div>
                <i className="fa-solid fa-star text-white mx-2"></i>
                <div className='line mt-2'></div>
              </div>
              <p className='text-white mt-4'>Graphic Artist - Web Designer - Illustrator</p>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

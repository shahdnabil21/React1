import React from 'react'
import './About.css'
export default function About() {
  return (
    <div className='bg-middle'>
      <div className='container'>
        <div className=' d-flex justify-content-center align-items-center flex-column vh-100 '>
          <h1 className='text-white pt-5 text-center fw-bold  about '>ABOUT COMPONENT</h1>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='line mt-2'></div>
            <i className="fa-solid fa-star text-white mx-3"></i>
            <div className='line mt-2'></div>
          </div>
          <div className='row text-white mt-4 container'>
            <div className='col-md-6 ps-md-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className='col-md-6 pe-md-5'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

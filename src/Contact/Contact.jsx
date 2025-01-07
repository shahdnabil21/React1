import './Contact.css'
import './Contactmedia.css'


export default function Contact() {
  return (
    <>
      <div className='container py-5'>
      <h1 className='maincolor text-center fw-bold pt-5 mt-5'>CONTACT COMPONENT</h1>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='line2 mt-2'></div>
          <i className="fa-solid fa-star mx-3 maincolor"></i>
          <div className='line2 mt-2'></div>
        </div>
       <div className='d-flex justify-content-center align-items-center flex-column  '>
       <div className="form-floating mt-4 mb-2">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">userName</label>
        </div>
        <div className="form-floating my-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">userAge</label>
        </div>
        <div className="form-floating my-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">userEmail</label>
        </div>
        <div className="form-floating my-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">userPassword</label>
        </div>
        <button className='btn d-flex align-self-start mArgin'>Send Message</button>
       </div>

      </div>

    </>
  )
}

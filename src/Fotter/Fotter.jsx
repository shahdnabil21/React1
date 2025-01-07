import './fotter.css'
import './Media.css'
export default function Fotter() {
  return (
    <>
    <div className='fotter-bg d-flex justify-content-center'>
      <div className=' container'>
        <div className='row text-center'>
          <div className='col-md-4 text-white m'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-md-4 text-white m'>
            <h3>AROUND THE WEB</h3>
            <ul className='list-unstyled align-items-center d-flex justify-content-center gap-2'>
              <li><i className="fa-brands fa-facebook round"></i></li>
              <li><i className="fa-brands fa-twitter round "></i></li>
              <li><i className="fa-brands fa-linkedin  round"></i></li>
              <li><i className="fa-solid fa-globe   round"></i></li>
            </ul>
          </div>
          <div className='col-md-4 text-white m'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

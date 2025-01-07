import './NavMedia.css'
import './Nav.css'
import { Link, NavLink  } from 'react-router-dom'
export default function Nav() {
let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const currentUrl = window.location.href;
navLinks.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shrink'); 
    } else {
      navbar.classList.remove('shrink');
    }
  });
  return (
    <>
  <nav className=" navbar navbar-expand-lg bg-nav position-fixed  w-100">
  <div className="container">
    <Link className="navbar-brand text-white fw-bold" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bg-nav">
        <li className="nav-item ms-2">
          <NavLink className="nav-link text-white fw-bold "  aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link text-white fw-bold" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item ms-2">
          <NavLink className="nav-link text-white fw-bold" to="contact">CONTACT</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

    </>
  )
}

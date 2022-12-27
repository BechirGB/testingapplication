import './Header.css'
import logo from'../../assets/images/logo.png'
import {NavItemDropDown,Navitem } from '../../index';



const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="#"><img src={logo}></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Games</a>
      <a className="nav-item nav-link" href="#">Shop</a>
      <a className="nav-item nav-link " href="#">Profile</a>
    </div>
  </div>
</nav>
  )
}

export default Header
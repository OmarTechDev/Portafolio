import Logo from '../assets/logo.svg?react'
import './Navbar.css'

const ElementsBar = () => (
  <ul className='navbar ul'>
    <li className="nav-item">
      <a href="/" className="nav-link elements">Home</a>
    </li>
    <li className="nav-item">
      <a href="/about" className="nav-link elements">About</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Projects
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/Multi">MultiApp</a></li>
        <li><a className="dropdown-item" href="/calculator">Calculator</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="/rovers">Rovers Game</a></li>
      </ul>
    </li>
  </ul>
)

function NavBar() {
  return (
    <nav className="navbar custome-nav">
      <div className="row">
        <div className="col-1 col-md-1 logo-container">
          <Logo className="App-logo"/>
        </div>
        <div className="col-5 col-md-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <h1 className="navbar-title">Omar Oporto Bernal</h1>
        </div>
        <div className="col-6 col-md-4 d-flex justify-content-end">
          <ElementsBar/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

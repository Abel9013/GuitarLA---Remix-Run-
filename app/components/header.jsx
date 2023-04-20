import { Link } from '@remix-run/react'
import Navegacion from './navegacion'
import logo from '../../public/img/logo.svg'
function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link className="logo" to="/">
            <img className='logo' src={logo} alt="imagen logo" />
        </Link>
        <Navegacion />
      </div>

    </header>
  )
}

export default Header
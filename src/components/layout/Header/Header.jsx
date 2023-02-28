import './_Header.scss'
import LogoML from '../../../assets/meli-logo.png'
import Cart from '../../../assets/cart.svg'
import ImageDisney from '../../../assets/disney-image.webp'
import InputSearch from '../../commons/InputSearch/InputSearch'
import LocationLogo from '../../../assets/location.svg'
import { menuMiddle, menuRight } from '../../../utils/text'
import Arrow from '../../../assets/arrow.svg'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__grid'>
          <Link to='/' className='header__logo'>
          </Link>
          <div className='header__input'>
            <InputSearch type="search"/>
          </div>

          <img src={ImageDisney} className="header__image-right" alt="" />
          <div className='header__menu-toggle'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <img src={Cart} alt="cart icon" className="header__cart-mobile"/>
          <div className='header__addresses'>
            <button className='header__location'>
              <img src={LocationLogo} alt="location logo" />
              <div className='header__location-text'>
                <span className='header__location-destinity'>Enviar a Agustina</span>
                <span className='header__location-direction'>Buenos Aires 755</span>
              </div>
            </button>
            <img src={Arrow} className='header__location-arrow-right' />
          </div>

          <ul className='header__menu-middle'>
          {
            menuMiddle.map((item, i)  => (
              <li key={i}>{ item.title }</li>
            ))
          }
          </ul>

          <ul className='header__menu-right header__nav'>
          {
            menuRight.map((item, i)  => (
              <li key={i}>
                { item.icon && <img src={item.icon} className="header__menu-icon" /> }
                <span>{ item.title }</span>
                { item.arrow && <img src={Arrow} className="header__menu-arrow" /> }
              </li>
            ))
          }
          </ul>

        </div>
      </div>
    </header>
  )
}

export default Header
import Text from '../../components/commons/Text/Text'
import './_SingleProductCopy.scss'
import StarFull from '../../assets/star.svg'
import StarHalf from '../../assets/star-half.svg'
import Truck from '../../assets/truck.svg'
import ArrowLeft from '../../assets/arrow-left.svg'
import ArrowBlue from '../../assets/arrow-blue.svg'
import Arrow from '../../assets/arrow.svg'
import Shield from '../../assets/shield.svg'
import Cup from '../../assets/cup.svg'
import GuitarImage from '../../assets/guitarra-electrica.webp'
import { Link } from 'react-router-dom'
import Button from '../../components/commons/Button/Button'

const SingleProduct = () => {


  return (
    <div className='single-product container'>
      <div className='single-product__breadcrumb'>
        <div className='single-product__breadcrumb-links'>
          <Text Element='span'>Volver al listado</Text>
          <Text Element='span'>|</Text>
          <Link to='/' className='single-product__position'>Instrumentos Musicales</Link>
          <img src={Arrow} className='single-product__arrow-right' />
          <Link to='/' className='single-product__position'>Instrumentos de Cuerdas</Link>
          <img src={Arrow} className='single-product__arrow-right' />
          <Link to='/' className='single-product__position'>Guitarras</Link>
          <img src={Arrow} className='single-product__arrow-right' />
          <Link to='/' className='single-product__position'>Kits Guitarras y Amplificador</Link>
        </div>
        <div className='single-product__breadcrumb-links-right'>
          <Link to='/' className='single-product__position'>Compartir</Link>
          <Text Element='span'>|</Text>
          <Link to='/' className='single-product__position'>Vender uno igual</Link>
        </div>
      </div>

        <div className='single-product__main'>
          <div className='single-product__image'>
            <img src={GuitarImage} alt="" className='single-product__image-product' />
          </div>
          <div className='single-product__details'>
            <div className='single-product__subtitles'>
              <Text Element="span" className='single-product__subtitle'>Nuevo</Text>
              <Text Element="span" className='single-product__subtitle'> | </Text>
              <Text Element="span" className='single-product__subtitle'>+100 vendidos</Text>
            </div>

          <div className='single-product__image-mobile'>
            <img src={GuitarImage} alt="" className='single-product__image-mobile-product' />
          </div>

            <Text Element="h1" className='single-product__title'>Guitarra Eléctrica Stratocaster Sx + Amplificador</Text>
            <div className='single-product__valuation'>
              <div className='single-product__valuation-stars'>
                <img src={StarFull} alt="" className='single-product__valuation-star'/>
                <img src={StarFull} alt="" className='single-product__valuation-star'/>
                <img src={StarFull} alt="" className='single-product__valuation-star'/>
                <img src={StarFull} alt="" className='single-product__valuation-star'/>
                <img src={StarHalf} alt="" className='single-product__valuation-star'/>
              </div>
              <div>
                <Link to='/' className='single-product__valuation-review'>(36)</Link>
              </div>
            </div>

            <div className='single-product__promotions'>
              <div>
                <Text Element='p' className='single-product__bestseller'>MÁS VENDIDO</Text>
              </div>
              <div>
                <Link to='/' className='single-product__position'>2° en Kits Guitarras y Amplificador</Link>
              </div>
            </div>

            <div className='single-product__price'>
              <Text Element="h2" className='single-product__price-total'>$ 114.270</Text>
              <Text Element="p" className="single-product__cuotas">Mismo precio en 6 cuotas de $19.045</Text>
            </div>

            <div className='single-product__points'>
              <Text Element="p">
                <span className='single-product__point'>Duplica puntos: </span>
                <span className='single-product__total-point'>sumás <del>816</del> 1632 Mercado Puntos</span>
              </Text>
              <Link to='/' className='single-product__payment-methods'>Ver los medios pago</Link>
            </div>

            <div className='single-product__shipping'>
              <div className='single-product__delivery'>
                <img src={Truck} alt="" className='single-product__truck' />
              </div>
              <div className='single-product__shipping-calculator'>
                <Text Element='p' className='single-product__free-shipping'>Llega gratis <span>el miércoles</span></Text>
                <Link to='/'>Ver más formas de entrega</Link>
              </div>
            </div>

            <div className='single-product__return'>
              <div className='single-product__arrow'>
                <img src={ArrowLeft} alt="" className='single-product__arrow-left' />
              </div>
              <div className='single-product__return-details'>
                <Text Element='p' className='single-product__free-return'>
                  Devolución gratis
                  <span className='single-product__free-return-details'>Tenés 30 días desde que lo recibís.</span>
                </Text>
                <Link to='/'>Conocer más</Link>
              </div>
            </div>

            <div className='single-product__variations'>
              <div className='single-product__variation'>
                <Text Element='p' className='single-product__variations-color'>
                Color:
                </Text>
              <Text Element='p' className='single-product__variations-color-black'>Negro</Text>

              </div>

              <div className='single-product__variations-image'>
                <img src={GuitarImage} alt="" className='single-product__image-product' />
                <img src={ArrowBlue} alt="" className='single-product__variations-menu-arrow' />
              </div>
            </div>

            <div>
              <Text Element='p' className='single-product__stock'>
              Stock disponible
              </Text>
            </div>

            <div className='single-product__quantity'>
              <Text Element='p' className='single-product__quantity-total'>
              Cantidad: <span>1</span>
              </Text>
              <Text Element='p' className='single-product__quantity-unit'> unidad</Text>
              <div className='single-product__quantity-arrow'>
                <img src={ArrowBlue} alt="" className='single-product__quantity-menu-arrow' />
              </div>

              <Text Element='p' className='single-product__quantity-available'>(12 disponibles)</Text>
            </div>
            <div className='single-product__buttons'>
              <Button variant='primary' width='100'>Comprar ahora</Button>
              <Button variant='secondary' width='100'>Agregar al carrito</Button>
            </div>

            <div className='single-product__benefits'>
              <div className='single-product__protected-buy'>
                <img src={Shield} alt="" className='single-product__protected-buy-shield' />
                <Text Element='p' className='single-product__protected-buy-details'><Link to='/' className='single-product__protected-buy-link'>Compra Protegida</Link>, recibí el producto que esperabas o te devolvemos tu dinero.</Text>
              </div>

              <div className='single-product__mercado-puntos'>
                <img src={Cup} alt="" className='single-product__mercado-puntos-cup' />
                <Text Element='p' className='single-product__mercado-puntos-details'><Link to='/' className='single-product__mercado-puntos-link'>Mercado Puntos</Link>. Sumás 1632 puntos.</Text>
              </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default SingleProduct
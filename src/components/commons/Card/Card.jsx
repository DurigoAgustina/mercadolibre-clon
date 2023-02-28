import { Link } from 'react-router-dom'
import Text from '../Text/Text'
import './_Card.scss'

const Card = ({img, titulo, precio, cuotas, envio}) => {
  return (
    <div className='card'>
      <Link to='/producto/guitarra-electrica'>
        <img src={img} alt="" className='card__image'/>
        <div className='card__details'>
          <Text Element='h3' className='card__precio'>{precio}</Text>
          <Text Element='h4' className='card__cuotas'>{cuotas}</Text>
          <Text Element='h4' className='card__envio'>{envio}</Text>
          <Text Element='h5' className='card__titulo'>{titulo}</Text>
        </div>
      </Link>
    </div>
  )
}

export default Card
import { Link } from 'react-router-dom'
import { payments } from '../../../utils/text'
import Text from '../../commons/Text/Text'
import ViewMore from '../../../assets/view-more.svg'
import './_PaymentSection.scss'

const PaymentSection = () => {
  return (
    <div className="payment-section container">
      <div className="payment-section__items">
        {
          payments.map( (payment, i) => (
            <div key={i} className='payment-section__item'>
              <div>
                {payment.icon && <img src={payment.icon} className='payment-section__icon'/>}
              </div>
              <div>
                <Text Element='h3' className='payment-section__title'>{payment.title}</Text>
                <Link to='/' className='payment-section__subtitle'>{payment.subtitle}</Link>
              </div>
            </div>
          ))
        }
        <div className='payment-section__view-more'>
          <img src={ViewMore} />
        </div>
      </div>
    </div>
  )
}

export default PaymentSection
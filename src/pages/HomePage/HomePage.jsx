import './_HomePage.scss'
import Banner from '../../assets/banner-ml.png'
import PaymentSection from '../../components/layout/PaymentSection/PaymentSection'
import Recommendations from '../../components/layout/Recommendations/Recommendations'

const HomePage = () => {
  return (
    <div className='homepage'>
      <img className='homepage__banner' src={Banner} alt="" />
      <PaymentSection />
      <Recommendations />
    </div>
  )
}

export default HomePage
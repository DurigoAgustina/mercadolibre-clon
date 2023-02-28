import './_Recommendations.scss'
import { Link } from "react-router-dom"
import Text from "../../commons/Text/Text"
import GridCard from "../GridCard/GridCard"

const Recommendations = () => {
  return (
    <div className='recommendations container containerSections'>
      <div className='recommendations__section'>
        <Text Element='h2' className='recommendations__section-title'>Basado en tu última visita <Link to='/'>Ver historial</Link></Text>
      </div>
      <GridCard />
    </div>
  )
}

export default Recommendations
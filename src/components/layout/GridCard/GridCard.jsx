import { products } from "../../../utils/products"
import './_GridCard.scss'
import Card from "../../commons/Card/Card"

const GridCard = () => {
  return (
    <div className='gridcard'>
      {
        products.map( ({precio, img, titulo, envio, cuotas}) => (
          <Card
            img={img}
            titulo={titulo}
            precio={precio}
            envio={envio}
            cuotas={cuotas}
            />
          ))
        }
    </div>
  )
}

export default GridCard
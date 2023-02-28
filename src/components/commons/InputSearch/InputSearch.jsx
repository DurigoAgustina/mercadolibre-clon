import './_InputSearch.scss'
import Lupa from '../../../assets/lupa.svg'

const InputSearch = ({...props}) => {
  return (
    <form className='input-search'>
      <input onChange={console.log} className='input-search__input' type="search" placeholder="Buscar productos, marcas y más..." />
      <button className='input-search__button' type='submit'>
        <img src={Lupa} />
      </button>
    </form>
  )
}

export default InputSearch

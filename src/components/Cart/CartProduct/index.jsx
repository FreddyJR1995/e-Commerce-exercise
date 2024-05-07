import { useContext, useState } from 'react'
import './CartProduct.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../../contexts/SearchContext';
import Counter from '../../Counter';
import PropTypes from 'prop-types'; 

function CartProduct({ product }) {
  const {
    removeProduct,
    updateProductTotal
  } = useContext(SearchContext);
  const [count, setCount] = useState(product.count)
  const removeCartProduct = () => {
    removeProduct(product.id)
  }
  const increaseProduct=()=>{
    const newCount = count+1
    updateProductTotal(product.id, newCount)
    setCount(newCount)
  }
  const decreaseProduct=()=>{
    const newCount = count-1
    updateProductTotal(product.id, newCount)
    setCount(newCount)
  }
  return (
    <div>
      <div className='removeProductButton'>
        <AiOutlineCloseCircle className='closeModal' onClick={removeCartProduct} />
      </div>
      <div className="imageContainer">
        <img src={product.image} />
      </div>
      <div className='productTotalContainer'>
      <p>${product.total.toFixed(2)}</p>
      </div>
      <div className='productCountContainer'>
      <Counter count={count} setCount={setCount} styles={{ color: '#8B8B8B'}} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct}/>
      </div>
      <hr/>
    </div>
  )
}
CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};
export default CartProduct
import { useContext, useState } from 'react'
import './CartProduct.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { SearchContext } from '../../../contexts/SearchContext';
import Counter from '../../Counter';

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
      <p>${product.total}</p>
      </div>
      <div className='productCountContainer'>
      <Counter count={count} setCount={setCount} styles={{ color: '#8B8B8B'}} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct}/>
      </div>
      <hr/>
    </div>
  )
}

export default CartProduct
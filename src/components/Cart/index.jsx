import { useContext, useEffect, useState } from 'react';
import './Cart.css'
import { SearchContext } from '../../contexts/SearchContext';
import CartProduct from './CartProduct';

function Cart() {
  const {
    selectedProducts
  } = useContext(SearchContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      selectedProducts.forEach(product => {
        total += product.total;
      });
      setTotalPrice(Number(total.toFixed(2)));
    };

    calculateTotalPrice();
    return () => {};
  }, [selectedProducts]); 

  return (
    <div>
      <div className='continueButtonContainer'>
          <p className='componentLabel'>Subtotal</p>
          <p className='componentValue'>${totalPrice}</p>
          <button className='continueButton'>Continue</button>
      </div>
      {selectedProducts.length > 0 ? selectedProducts.map((product) => (
        <CartProduct key={product.id} product={product} />
      )) : ""}
    </div>
  );
}

export default Cart;

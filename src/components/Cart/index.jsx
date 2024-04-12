import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <div className='continueButtonContainer'>
        <p className='componentLabel'>Subtotal</p>
        <p className='componentValue'>$2000</p>
        <button className='continueButton'>Continue</button>
    </div>
  )
}

export default Cart
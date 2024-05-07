import { useContext, useState } from 'react';
import './Modal.css'
import { Rating } from "../Filter/RatingFilter/Rating"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchContext } from '../../contexts/SearchContext';
import Counter from '../Counter';


function Modal() {
    const {
        setIsOpen,
        productId,
        imageProduct,
        titleProduct,
        priceProduct,
        descriptionProduct,
        ratingProduct,
        addProducts
    } = useContext(SearchContext);
    const [count, setCount] = useState(1);

    const increaseProduct = ()=>{
        setCount(count+1)
    }

    const decreaseProduct = ()=>{
        setCount(count-1)
    }

    const setCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <div className='ModalContainer'>
            <div className='ContentModalContainer'>
                <div className='ProductImageContainer'>
                    <AiOutlineCloseCircle className='closeModal' onClick={setCloseModal} />
                    <img src={imageProduct} />
                </div>
                <div className="DetailsModalContainer">
                    <div className="HeaderDetailModalContainer">
                        <h3>{titleProduct}</h3>
                        <h3>${priceProduct}</h3>
                    </div>
                    <Rating stars={ratingProduct} />
                    <h6>{descriptionProduct}</h6>
                    <div className="cardFooterContainer">
                        <Counter count={count} setCount={setCount} style={{ color: 'white' }} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct}/>
                        <button className='AddCardButton' onClick={() => addProducts({ id: productId, image: imageProduct, count: count,price:priceProduct, total: priceProduct * count })}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Modal }
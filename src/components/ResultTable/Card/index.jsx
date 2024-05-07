import { useContext } from 'react';
import { Detail } from './Detail'
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css'

function Card ({ id, image, title, price, description, rating }) {
    const {
        setIsOpen,
        setProductId,
        setImageProduct,
        setTitleProduct,
        setPriceProduct,
        setDescriptionProduct,
        setRatingProduct
    } = useContext(SearchContext);

    const openModal = () => {
        setIsOpen(true)
        setProductId(id)
        setImageProduct(image)
        setTitleProduct(title)
        setPriceProduct(price)
        setDescriptionProduct(description)
        setRatingProduct(rating)
    }

    return (
        <div className='CardContainer' onClick={openModal}>
            <div className='ProductImageContainer'>
                <img src={image}/>
            </div>
            <Detail 
                title = {title}
                price = {price}
                rating = {rating}
            />
        </div>
    )
}

export { Card }
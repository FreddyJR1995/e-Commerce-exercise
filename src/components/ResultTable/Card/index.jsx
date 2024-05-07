import { useContext } from 'react';
import { Detail } from './Detail'
import { SearchContext } from '../../../contexts/SearchContext';
import './Card.css'
import PropTypes from 'prop-types';

function Card({ id, image, title, price, description, rating }) {
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
                <img src={image} />
            </div>
            <Detail
                title={title}
                price={price}
                rating={rating}
            />
        </div>
    )
}
Card.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export { Card }
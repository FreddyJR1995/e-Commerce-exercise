import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'
import PropTypes from 'prop-types'; 

function Detail ({title, price, rating }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={rating}/>
            <h3>${price}</h3>
        </div>
    )
}

Detail.propTypes ={
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
};
export { Detail }

import { Rating } from './Rating'
import './RatingFilter.css'
import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';

function RatingFilter() {
    const { setSelectedRate } = useContext(SearchContext);
    const ratings = [4, 3, 2, 1];
    return (
        <div className='RatingFilterContainer'>
            <h2>Rates:</h2>
            <div className='RatingsContainer'>
                {ratings.map((rating, index) => (
                    <div key={index} onClick={() => setSelectedRate(rating)}>
                        <Rating stars={rating} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export { RatingFilter }
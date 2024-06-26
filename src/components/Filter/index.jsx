import { useContext } from 'react';
import {SearchContext } from '../../contexts/SearchContext'
import { TypeFilter } from './TypeFilter'
import { RatingFilter } from './RatingFilter'
import './Filter.css'

function Filter () {
    const {filterByCategories} = useContext(SearchContext);
    return (
        <div className='FilterContainer'>
            <TypeFilter
                name='Category'
                options={[
                    {id: "men's clothing", label: "Men's Clothing"},
                    {id: "women's clothing", label: "Women's Clothing"},
                    {id: "jewelery", label: "Jewelery"},
                    {id: "electronics", label: "Electronics"}
                ]}
                onCategoryChange={filterByCategories}
            />
            <RatingFilter />
        </div>
    )
}

export { Filter }
import './CartLogo.css'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

function CartLogo () {
    const { setOpenCartSection, openCartSection } = useContext(SearchContext);

    const handleCartSection =()=>{
        setOpenCartSection(!openCartSection)
    }
    return (
        <div className='cartLogoContainer' onClick={handleCartSection}>
            <img src='src/assets/CartLogo/shopping-cart.png'/>
        </div>
    )
}

export { CartLogo }
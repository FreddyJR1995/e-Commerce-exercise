import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import './Counter.css';
import PropTypes from 'prop-types';

function Counter({count, styles, increaseProduct, decreaseProduct}) {
    return (
        <div className="counterContainer">
            <AiOutlineMinusCircle className="counterButton" style={count > 1 ? styles: {color:'#8B8B8B'}} onClick={count > 1 ? decreaseProduct : null} />
            <p className="counterText" style={styles}>{count}</p>
            <AiOutlinePlusCircle className="counterButton" style={styles} onClick={increaseProduct} />
        </div>
    )
}
Counter.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
    styles: PropTypes.object,
    increaseProduct: PropTypes.func.isRequired,
    decreaseProduct: PropTypes.func.isRequired,
};

export default Counter
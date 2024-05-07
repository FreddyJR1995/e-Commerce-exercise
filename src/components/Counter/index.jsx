import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import './Counter.css'
function Counter({count, setCount, styles, increaseProduct, decreaseProduct}) {
    return (
        <div className="counterContainer">
            <AiOutlineMinusCircle className="counterButton" style={count > 1 ? styles: {color:'#8B8B8B'}} onClick={count > 1 ? decreaseProduct : null} />
            <p className="counterText" style={styles}>{count}</p>
            <AiOutlinePlusCircle className="counterButton" style={styles} onClick={increaseProduct} />
        </div>
    )
}

export default Counter
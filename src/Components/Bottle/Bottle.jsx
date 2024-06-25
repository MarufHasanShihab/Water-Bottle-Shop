import "./Bottle.css"
import PropTypes from 'prop-types';

const Bottle = ({bottle, handlePurchaseBtn}) => {
    const {name, img, price} = bottle;
    return (
        <div>
            <div className="bottle">
            <div>
            <img src={img}/>
            <h4>{name}</h4>
            <h5>Price : {price}</h5>
            <button onClick={()=> handlePurchaseBtn(bottle)} >Purchase</button>
            </div>
            </div>
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handlePurchaseBtn: PropTypes.func.isRequired
}

export default Bottle;
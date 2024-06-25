
import "./cart.css"
import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    return (
        <div>
           <h3>{cart.length}</h3>
           <div className="cart-container" >
            {cart.map(bottle=> <img key={bottle.id} src={bottle[0].img} />)}
           </div>
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array
}

export default Cart;
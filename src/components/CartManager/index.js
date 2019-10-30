import React, {Component} from 'react';
import Cart from './Cart';

class CartManager extends Component {
    render() {
        return (
            <div>
                <h2>Shopping Cart</h2>
                <Cart/>
            </div>
        );
    }
}

export default CartManager;

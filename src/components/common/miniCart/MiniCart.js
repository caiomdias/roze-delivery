import React from 'react';
import CartIcon from '../../../assets/images/svg/cart';

const MiniCart = (props) => (
	<div className="mini-cart">
		<div className="mini-cart__counter">0</div>
		<CartIcon className="mini-cart__icon" />
	</div>
);

export default MiniCart;

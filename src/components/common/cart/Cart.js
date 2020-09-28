import React, { useState } from 'react';
import ProductCard from '../productCard/ProductCard'
import Close from '../../../assets/images/svg/close';

const Cart = (props) => {
	const [isOpen, setOpen] = useState(true);

	return (
		<aside className={isOpen ? 'cart cart--open': 'cart'}>
			<div className="cart__header">
				<span className="title">Meu Carrinho</span>
				<Close
					className="close-btn"
					onClick={() => setOpen(false)}/>
			</div>
			<div className="cart__content">
				<ProductCard mode="cart" />
				<ProductCard mode="cart" />
				<ProductCard mode="cart" />
				<ProductCard mode="cart" />
				<ProductCard mode="cart" />
			</div>
			<div className="cart__total">
				<span>Total a pagar:</span>
				<strong className="total-amount">R$ 9,50</strong>
			</div>
		</aside>
	)
};

export default Cart;

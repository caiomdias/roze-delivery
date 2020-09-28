import React, { useState } from 'react';

const ProductCard = ({ mode, product }) => {
	const [ quantity, setQuantity ] = useState(0);
	const [ productState, setProductState ] = useState(product)
	
	const updateQuantity = (type) => {
		if (type === 'add') {
			setQuantity(quantity + 1);
		} else {
			if (quantity <= 1) return quantity;
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className={`product-card product-card--${mode}`}>
			<div className="product-card__content">
				<div className="product-card__image">
					<img src={productState.images && productState.images[0].url} alt={`Imagem de ${productState.title}`}/>
				</div>
				<div className="product-card__description">
					<h4 className="product-card__title">{productState.title}</h4>
					<p className="product-card__price">R$ {productState.productVariants && productState.productVariants[0].price}</p>
				</div>
			</div>
			<div className="product-card__actions">
				<div className="quantity">
					<div
						onClick={() => updateQuantity('remove')}
						className="quantity__minus">-</div>
					<div className="quantity__value">{quantity}</div>
					<div
						onClick={() => updateQuantity('add')}
						className="quantity__plus">+</div>
				</div>
				{
					mode === 'shelf' && (
						<div className="buy-button">
							Adicionar
						</div>
					)
				}
				{
					mode === 'cart' && (
						<a href="">Excluir</a>
					)
				}
			</div>
		</div>)
};

ProductCard.defaultProps = {
	mode: 'shelf',
	product: {}
};

export default ProductCard;

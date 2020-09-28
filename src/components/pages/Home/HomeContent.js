import React from 'react';
import Search from '../../common/search/Search'

const HomeContent = () => (
	<div className="home-content">
		<div className="container">
			<div className="content-wrapper">
				<h1>
					<strong>Bebidas geladas </strong> a <strong>preço </strong>de mercado na sua casa <strong>agora</strong>
				</h1>
				<Search
					type="address"
					placeholder="Insera seu endereço para ver preço"
				/>
			</div>
		</div>
	</div>
);

export default HomeContent;

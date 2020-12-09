import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import Search from '../search/Search';
import MiniCart from '../miniCart/MiniCart';

const Header = (props) => {
	const history = useHistory();
	const { pathname } = useLocation();
	const { config } = props;

	return (
		<header className="header">
			<div className="container content">
				<div onClick={() => history.push('/')} className="header__logo">
					<img style={config && config.style} src={config && config.image} alt="Jose Entregas"/>
				</div>
				{/* {
					config.hasSearch && (
						<div className="header__search">
							<Search
								type="products"
								placeholder="Pesquise sua bebida favorita"
							/>
						</div>
					)
				} */}
				{/* { pathname !== '/' && ( <MiniCart /> )} */}
			</div>
		</header>
	)
};

export default Header;

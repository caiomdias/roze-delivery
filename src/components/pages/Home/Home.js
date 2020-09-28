import React from 'react';
import HomeContent from './HomeContent';
import whiteLogo from '../../../assets/images/png/logo.png';
import Header from '../../common/Header';

const headerConfig = {
	image: whiteLogo,
	hasSearch: false,
	style: {
		width: '50px',
		cursor: 'unset',
	}
}

const Home = () => (
	<>
		<Header config={headerConfig} />
		<HomeContent />
	</>
);

export default Home;

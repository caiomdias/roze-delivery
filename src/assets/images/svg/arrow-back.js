import React from 'react';

const ArrowBack = (props) => {
	const { onClick, width, className } = props;
	return (
		<svg viewBox="0 0 24 24" onClick={onClick} width={width} role="presentation" className={className}>
			<path fill="inherit" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
		</svg>
	)
};

ArrowBack.defaultProps = {
	width: '30px',
	className: 'svg-icon',
	onClick: null
}

export default ArrowBack;

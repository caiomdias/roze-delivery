import React from 'react';

const Close = (props) => {
	const { onClick, width, className } = props;
	return (
		<svg width={width} onClick={onClick} className={className} enableBackground="new 0 0 413.348 413.348" viewBox="0 0 413.348 413.348" xmlns="http://www.w3.org/2000/svg">
			<path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/>
		</svg>
	)
};

Close.defaultProps = {
	width: '30px',
	className: 'svg-icon',
	onClick: null
}

export default Close;

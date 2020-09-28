import React from 'react';
import renderer from 'react-test-renderer';
import MiniCart from './MiniCart';

describe("Mini Cart Component", () => {
	it('render correctly MiniCart component', () => {  
		const miniCartComponent = renderer.create(<MiniCart />);
		expect(miniCartComponent).toMatchSnapshot();
	});
});
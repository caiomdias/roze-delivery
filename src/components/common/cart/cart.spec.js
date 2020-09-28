import { italic } from 'chalk';
import { test } from 'picomatch';
// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Cart from './Cart';

describe("Cart Component", () => {
	it('render correctly Cart component', () => {  
		const cartComponent = renderer.create(<Cart />);
		expect(cartComponent).toMatchSnapshot();
	});
});
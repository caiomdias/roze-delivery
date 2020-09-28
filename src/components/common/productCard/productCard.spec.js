import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from './ProductCard';

describe("Product Cart Component", () => {
	it('render correctly ProductCard component', () => {  
		const productCardComponent = renderer.create(<ProductCard />);
		expect(productCardComponent).toMatchSnapshot();
	});
});
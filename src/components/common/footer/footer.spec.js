import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe("Footer Component", () => {
	it('render correctly Footer component', () => {  
		const footerComponent = renderer.create(<Footer />);
		expect(footerComponent).toMatchSnapshot();
	});
});
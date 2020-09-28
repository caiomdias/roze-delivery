import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

const config = {
	type: 'products',
	placeholder: 'test',
}

describe("Search Component", () => {
	it('render correctly Search component', () => {  
		const searchComponent = renderer.create(<Search type={config.type} placeholder={config.placeholder}/>);
		expect(searchComponent).toMatchSnapshot();
	});
});
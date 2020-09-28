import React from 'react';
import renderer from 'react-test-renderer';
import Routes from './Routes';

describe("Routes Component", () => {
	it('Should render correctly Routes component', () => {  
		const routesComponent = renderer.create(<Routes />);
		expect(routesComponent).toMatchSnapshot();
	});
});
import React from 'react';
import renderer from 'react-test-renderer';
import Products from './Products';

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn().mockReturnValue({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: '5nvxpbdafa',
	}),
	useHistory: jest.fn().mockReturnValue({
		push: jest.fn().mockReturnValue()
	}),
}));

const props = {
	history: {
		location: {
			state: {
				lat: '111111',
				long: '22222'
			}
		},
	}
}

describe("Products Component", () => {
	it('Should render correctly Products component', () => {  
		const productsComponent = renderer.create(<Products {...props}/>).toJSON();
		expect(productsComponent).toMatchSnapshot();
	});
});
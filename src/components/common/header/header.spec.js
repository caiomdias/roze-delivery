import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

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
	})
}));

const config = {
	image: '',
	style: ''
}

describe("Header Component", () => {
	it('render correctly Header component', () => {  
		const headerComponent = renderer.create(<Header config={config}/>);
		expect(headerComponent).toMatchSnapshot();
	});
});
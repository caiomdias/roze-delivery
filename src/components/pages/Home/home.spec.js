import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

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

describe("Home Component", () => {
	it('render correctly Home component', () => {  
		const homeComponent = renderer.create(<Home />);
		expect(homeComponent).toMatchSnapshot();
	});
});
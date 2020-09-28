import React from 'react';
import renderer from 'react-test-renderer';
import HomeContent from './HomeContent';

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

describe("Home Content Component", () => {
	it('render correctly Home Content component', () => {  
		const homeContentComponent = renderer.create(<HomeContent />);
		expect(homeContentComponent).toMatchSnapshot();
	});
});
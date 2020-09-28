import React from 'react';
import renderer from 'react-test-renderer';
import Shelf from './Shelf';

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
	distributorId: '111',
	categoryId: '111'
}

describe("Shelf Component", () => {
	it('Should render correctly Shelf component', () => {  
		const shelfComponent = renderer.create(<Shelf {...props}/>);
		expect(shelfComponent).toMatchSnapshot();
	});
});
import React from 'react';
import renderer from 'react-test-renderer';
import ProductsContent from './ProductsContent';

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
	distributorId: '111'
}

describe("Products Content Component", () => {
	it('Should render correctly ProductsContent component', () => {  
		const productsContentComponent = renderer.create(<ProductsContent {...props}/>);
		expect(productsContentComponent).toMatchSnapshot();
	});
});
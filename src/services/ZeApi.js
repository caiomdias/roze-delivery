
import { clientApollo } from './Apollo'
import { GET_DISTRIBUTOR } from '../querys/distributor'
import { GET_CATEGORIES } from '../querys/categories'
import { GET_PRODUCTS } from '../querys/products'

const getDistributor = (variables) =>
	clientApollo().query({ 
    query: GET_DISTRIBUTOR,
    variables
});
  
const getCategories = (variables) =>
	clientApollo().query({ 
    query: GET_CATEGORIES,
    variables
});

const getProducts = (variables) =>
	clientApollo().query({ 
    query: GET_PRODUCTS,
    variables
});

export {
  getDistributor,
  getCategories,
  getProducts
}

import React, { useEffect, useState } from 'react'
import ProductCard from '../../common/ProductCard'
import { getProducts } from '../../../services/ZeApi'

const Shelf = (props) => {
	const { categoryId, distributorId } = props
	const [ categoryIdState, setCategoryIdState ] = useState(categoryId || '') 
	const [ distributorIdState, setDistributorId ] = useState(distributorId || '')
	const [ products, setProducts ] = useState([])

	const variables = {
		id: distributorIdState,
		search: '',
		categoryId: categoryIdState
  }
  
  useEffect(() => {
    if(distributorIdState && categoryIdState) {
      getProducts(variables)
        .then(({ data }) => {
          if(data.length != 0) {
            setProducts(data.poc.products)
          }
        })
    }
  }, [])

	return (
    <div className="shelf">
      {
        products
          ? products.map((item, index) => (
            <ProductCard key={index} product={item}/>
          ))
          : ''
      }
    </div>
	)
};

Shelf.defaultProps = {
	categoryId: '',
	distributorId: '',
}

export default Shelf;

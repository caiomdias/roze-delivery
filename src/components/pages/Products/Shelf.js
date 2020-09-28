import React, { useEffect, useState } from 'react'
import ProductCard from '../../common/productCard/ProductCard'
import { getProducts } from '../../../services/ZeApi'
import productNotFound from '../../../assets/images/png/product-not-found.png';


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
        products.length !== 0
          ? products.map((item, index) => (
            <ProductCard key={index} product={item}/>
          ))
          : <div className="shelf__not-found">
              <img src={productNotFound}></img>
              <p>Putz, não conseguimos encontrar nenhum produto dessa categoria</p>
            </div>
      }
    </div>
	)
};

Shelf.defaultProps = {
	categoryId: '',
	distributorId: '',
}

export default Shelf;

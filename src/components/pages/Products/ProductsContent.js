import React, { useEffect, useRef, useState } from 'react';
import Shelf from './Shelf';
import { getCategories } from '../../../services/ZeApi'

const ProductsContent = (props) =>  {
  const { distributorId } = props
  const [ allCategories, setAllCategories ] = useState([])
  const [ distributorIdState, setDistributorIdState ] = useState(distributorId || '532')

  const variables = {
    id: '532',
    search: '',
    categoryId: null
  }

  useEffect(() => {
    getCategories(variables)
      .then(({ data }) => {
        if(data.allCategory.length != 0) {
          setAllCategories(data.allCategory)
        }
      })
    return;
  }, [])

  return (
    <div className="products-content">
      <div className="container">
        {
          allCategories
          ? allCategories.map((item, index) =>
            (
            <div key={index} className="item">
              <p>{item.title}</p>
              <Shelf categoryId={item.id} distributorId={distributorIdState}/>
            </div>
            ))
          : ''
        }
      </div>
    </div>
  );
  };

ProductsContent.defaultProps = {
  distributorId: ''
}

export default ProductsContent;

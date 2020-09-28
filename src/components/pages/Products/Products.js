import React, {
  useEffect,
  useState
} from 'react';
import Header from '../../common/Header';
import ProductsContent from './ProductsContent';
import shortLogo from '../../../assets/images/png/logo.png';
import { getDistributor } from '../../../services/ZeApi'

const headerConfig = {
  image: shortLogo,
  hasSearch: true,
  style: {
    width: '55px',
    cursor: 'pointer',
  }
};

const Products = (props) => {
  const { lat, long } = props.match.params

  const [distributorId, setDistributorId] = useState('')
  const [latState, setLatState] = useState(lat || '')
  const [longState, setLongState] = useState(long || '')

  const variables = {
    algorithm: "NEAREST",
    lat: "-23.632919", //latState,
    long: "-46.699453", //longState,
    now: "2017-08-01T20:00:00.000Z"
  }

  useEffect(() => {
    if(latState, longState) {
      getDistributor(variables)
      .then(({ data }) => {
        if(data.pocSearch.length != 0) {
          setDistributorId(data.pocSearch[0].id)
        }
      })
    }
    return;
  }, [])

  return (
    <div>
      <Header config={headerConfig}/>
      <ProductsContent distributorId={distributorId}/>
    </div>
  )
};

Products.defaultProps = {
  lat: '',
  long: '',
}


export default Products;
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import GeoCodeAPI from '../../../services/Geocode'

import MapPinIcon from '../../../assets/images/svg/map-pin'
import SearchIcon from '../../../assets/images/svg/search'
import ArrowBack from '../../../assets/images/svg/arrow-back'
import searchImage from '../../../assets/images/png/product-not-found.png'
import addressImage from '../../../assets/images/png/not-found.png'

const SearchInput = ({ type, placeholder }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isActive, setActive] = useState(false);
	const [isLoading, setLoading] = useState(false);
	const [results, setResults] = useState([]);
	const [timer, setTimer] = useState(null);
	const [config, setConfig] = useState({ icon: {}, notFound: {} });
	const { icon, notFound } = config;
	const history = useHistory();

	const typeHandle = (searchType) => {
		const types = {
			products: {
				icon: {
					image: <SearchIcon/>,
				},
				notFound: {
					image: searchImage,
					maxWidth: '100px',
					alt: 'Uma lupa sobre a garrafa de cerveja que sumiu',
					message: 'Putz, não conseguimos encontrar o produto'
				}
			},
			address: {
				icon: {
					image: <MapPinIcon/>,
				},
				notFound: {
					image: addressImage,
					maxWidth: '160px',
					alt: 'Uma luneta em cima de um mapa',
					message: 'Ops! Não encontramos seu endereço...'
				}
			}
		};

		setConfig(types[searchType]);
	};

	const backHandle = () => {
		setActive(false);
		setSearchTerm('');
	};

	const fetchAddress = async (value) => {
		const coordenates = await GeoCodeAPI(value);
		const { results } = coordenates;
		const modeledResults = [];

		results.map(
			(
				{
					formatted_address: address,
					geometry: { location }
				}
			) => {
			const obj = {
				address,
				location,
			}
			modeledResults.push(obj);
		})

		setResults(modeledResults);
	};

	const searchHandle = (term) => {
		const { value } = term;
		clearTimeout(timer);

		setTimer(
			setTimeout(() => {
				if (value.length !== 0) {
					if (type === 'address') {
						fetchAddress(value)
					};

					setActive(true);
				} else {
					setActive(false)
				}
			}, 700)
		);

		setSearchTerm(value);
	};

	useEffect(() => {
    	typeHandle(type);
	}, []);

	return (
		<div className="search">
			<div className="search__input">
				<div className="icon">
					{ isActive
						? (<ArrowBack onClick={() => backHandle()} className="back" />)
						: icon.image
					}
				</div>
				<input
					onChange={({ target }) => searchHandle(target)}
					placeholder={placeholder}
					value={searchTerm}
					className="input"
					type="text"
				/>
			</div>

			{
				searchTerm.length !== 0 && (
					<div className={isActive ? 'search__results active' : 'search__results'}>
						{
							results.length !== 0 ? (
								<div className="results">
									{
										results.map(({ address, location }, i) => {
											return (
                        <div key={i} className="search__result-content">
                          <MapPinIcon />
                          <p
                            className="search__result-item"
                            onClick={() => history.push(`/products`, 
                              {
                                lat: location.lat,
                                long: location.lng
                              }
                            )}>{address}
                          </p>
                        </div>
											)
										})
									}
								</div>
							) : (
								<div className="not-found">
									<img
										src={notFound.image}
										alt={notFound.alt}
										style={{maxWidth: notFound.maxWidth}}
									/>
									<p>{notFound.message}
										<strong>
										{
											type !== 'address' && searchTerm
										}
										</strong>
									</p>
								</div>
							)
						}
					</div>
				)
			}

		</div>
	)
};

SearchInput.defaultProps = {
	type: 'products',
	placeholder: '',
};

export default SearchInput;

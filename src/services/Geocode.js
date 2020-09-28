const GeocodeAPI = async (address) => {
	const { GEOCODE_API } = process.env;
	const { GEOCODE_KEY } = process.env;
	const formatedAddress = !!address && address.replace(/\s/gi, '+');
	const url = `${GEOCODE_API}?address=${formatedAddress}&key=${GEOCODE_KEY}`;

	return fetch(url)
		.then(res => res.json());
}

export default GeocodeAPI;

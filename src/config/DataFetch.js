import axios from 'axios';

const DataFetch = async () => {
	const proxyurl = 'https://cors-anywhere.herokuapp.com/';

	const data = await axios.get('https://productappzen.herokuapp.com/products');
	console.log(data, 'data');
	return data;
};

DataFetch();
export default DataFetch;

import axios from 'axios';

const EditData = async (id, body) => {
	try {
		const data = await axios.put(
			`https://productappzen.herokuapp.com/products/update/${id}`,
			body
		);
		return data.status;
	} catch (e) {
		console.log('error', e.message);
	}
};

export default EditData;

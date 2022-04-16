import axios from 'axios';

const DeleteData = async (id) => {
	try {
		const data = await axios.delete(
			`https://productappzen.herokuapp.com/products/delete/${id}`
		);
		return data.status;
	} catch (e) {
		console.log('error', e.message);
	}
};

export default DeleteData;

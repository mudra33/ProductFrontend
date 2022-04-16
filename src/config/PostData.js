import axios from 'axios';

const PostData = async (body) => {
	const newData = await axios.post(
		'https://productappzen.herokuapp.com/products/create/',
		body
	);
	return newData;
};

export default PostData;

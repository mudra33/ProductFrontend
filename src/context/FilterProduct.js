import { useContext, useEffect, useState } from 'react';
import { productData } from './ProductContext';

const FilterProduct = (productId) => {
	const [state, setState] = useState(null);
	const productArray = useContext(productData);

	useEffect(() => {
		const prodObj = productArray.filter((data) => data.id === productId);
		setState(prodObj);
		// console.log(prodObj, "filterProduct");
	}, [productArray, productId]);

	return state ? state : null;
	//need to filter obj based on id
};

export default FilterProduct;

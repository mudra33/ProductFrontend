import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';

import Dashboard from '../Dashboard';
import PostData from '../config/PostData';
import { productDataUpdater } from '../context/ProductContext';
import ProductForm from './ProductForm';

const NewProduct = () => {
	const initialValue = {
		name: '',
		price: '',
	};

	const history = useHistory();
	const [state, setState] = useState(initialValue);
	const contextFun = useContext(productDataUpdater);

	const submitForm = async (ev, stateValue) => {
		ev.preventDefault();
		const result = await PostData(stateValue);
		console.log(result);
		if (result.status === 200) {
			setState(initialValue);
			await contextFun();
			history.replace('/dashboard/all-products');
		} else {
			alert('error');
		}
	};
	return (
		<Dashboard>
			<div className='container-fluid p-0 mx-auto my-4 '>
				<div className='container-sm row m-auto '>
					<div className='card-header bg-dark text-secondary text-center text-capitalize'>
						<h2>Create New Product</h2>
					</div>
					<ProductForm data={state} submitForm={submitForm} />
				</div>
			</div>
		</Dashboard>
	);
};

export default NewProduct;

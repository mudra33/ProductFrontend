import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router';

import Dashboard from '../Dashboard';
import ProductForm from './ProductForm';

import FilterProduct from '../context/FilterProduct';
import EditData from '../config/EditData';
import { productDataUpdater } from '../context/ProductContext';

const EditProduct = () => {
	const [state, setState] = useState(null);

	const contextFunc = useContext(productDataUpdater);
	const params = useParams();
	const productId = params.id;
	const history = useHistory();

	const getProduct = async () => {
		const userData = await FilterProduct(productId);
		setState(userData);
	};
	getProduct();

	if (!state) {
		return <div>Loading.....</div>;
	}

	const submitFormAfterEdit = async (ev, stateValue) => {
		ev.preventDefault();
		console.log(stateValue, 'stateValue from edituser');
		const response = await EditData(productId, stateValue);
		if (response === 200) {
			contextFunc();
			console.log(response);
			// history.push(`dashboard/view-profile/${userId}`);
			history.replace('/dashboard/all-products');
		}
	};

	return (
		<Dashboard>
			<h2>Edit Product ID: {params.id}</h2>
			<div className='container-fluid p-0 mx-auto my-4 '>
				<div className='container-sm row m-auto '>
					<div className='card-header bg-dark text-secondary text-center text-capitalize'>
						<h2>Edit Product Value</h2>
					</div>
					<ProductForm data={state[0]} submitForm={submitFormAfterEdit} />
				</div>
			</div>
		</Dashboard>
	);
};

export default EditProduct;

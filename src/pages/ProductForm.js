import React, { useState } from 'react';

const ProductForm = ({ data, submitForm }) => {
	const [state, setState] = useState(data);
	console.log(state, 'state from ProductForm');
	function handleChange(ev) {
		console.log(ev.target.value);
		const { name, value } = ev.target;
		setState((prev) => ({ ...prev, [name]: value }));
	}
	return (
		<>
			<div className='col bg-warning shadow-lg'>
				<form className='my-3'>
					<div className='col col-md-6 mb-3 mx-auto'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							className=' form-control'
							id='name'
							name='name'
							value={state.name}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className='col col-md-6 mb-3 mx-auto'>
						<label htmlFor='price'>Price</label>
						<input
							type='price'
							className=' form-control'
							id='price'
							name='price'
							value={state.price}
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className='col col-md-6 mb-3 mx-auto'>
						<button
							className='btn-outline-danger'
							onClick={(e) => submitForm(e, state)}
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default ProductForm;

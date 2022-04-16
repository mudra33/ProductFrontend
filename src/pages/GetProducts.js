import React, { useState, useContext, useEffect } from 'react';
import Dashboard from '../Dashboard';
import { Link } from 'react-router-dom';
import { productData } from '../context/ProductContext';

const GetProducts = () => {
	const [data, setData] = useState([]);
	const [message, setMessage] = useState('');

	const value = useContext(productData);

	useEffect(() => {
		console.log(value, ' value');
		setData(value.data.data);
		setMessage(value.data.message);
	}, [value]);

	return (
		<Dashboard>
			<div className='container-fluid p-0 p-md-auto m-0 m-md-auto'>
				<div className='container-sm row w-auto m-md-auto mx-1 p-1 p-md-auto justify-content-center '>
					{data
						? data.map((d, i) => (
								<li key={i}>
									{d.name} {d.price} {d._id}
								</li>
						  ))
						: 'loading...'}
					{/* {data} */}
					{message}
					{/* {data
						? data.map((d) => (
								<div className='col m-md-2 p-md-2 py-sm-2 py-2' key={d.id}>
									<Link to={`/dashboard/view-product/${d.id}`}>
										<div className='card' style={{ width: '18rem' }}>
											<div className=' card-body'>
												<div className='card-title'>{d.name}</div>
												<div className='card-subtitle'>{d.price}</div>
											</div>
										</div>
									</Link>
								</div>
						  ))
						: 'loading...'} */}
				</div>
			</div>
		</Dashboard>
	);
};

export default GetProducts;

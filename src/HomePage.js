import React, { useContext } from 'react';
import Dashboard from './Dashboard';
import { productData } from './context/ProductContext';
const HomePage = () => {
	const productTotal = useContext(productData);
	return (
		<Dashboard>
			<div className='container m-md-5 my-4 mb-md-3 p-4 mx-3 p-md-5 w-auto border-2 border-white bg-gradient card shadow-lg'>
				<h1> HomePage</h1>
				<p>CRUD operations are implemented</p>
				<h6>Click Products in SideBar</h6>
			</div>
			<div className='container m-md-3 mt-0  ms-0 p-4 mx-3 p-md-5 w-auto justify-content-between'>
				<div className='row'>
					<div className='col-md-5 col-sm-5 m-2 card shadow border-2 border-light'>
						<div className='card-body d-flex bg-white justify-content-between p-2 m-2'>
							<h6 className='card-title'>Products Available</h6>
							<span className='card-text badge bg-info d-flex align-items-center text-black'>
								{productTotal ? productTotal.length : null}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Dashboard>
	);
};

export default HomePage;

/* eslint-disable no-lone-blocks */
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import Dashboard from '../Dashboard';
import { productDataUpdater } from '../context/ProductContext';
import { Link, useHistory } from 'react-router-dom';

import DeleteData from '../config/DeleteData';
import FilterProduct from '../context/FilterProduct';

const UserProduct = () => {
	const history = useHistory();
	const params = useParams();
	// console.log(params);
	const [state, setState] = useState([]);

	const contextFun = useContext(productDataUpdater);
	const userId = params.id;

	//need to filter userobj based on id
	let userObj;
	const getUserObj = async () => {
		userObj = await FilterProduct(userId);
		// console.log(userObj, "userObj");
		setState(userObj);
	};
	getUserObj();

	return (
		<Dashboard>
			<div className='card-footer d-flex '>
				<Link to={`/dashboard/editProduct/${userId}`} className='ms-auto'>
					<button>
						<i className='fas fa-edit'></i>
						<span>edit</span>
					</button>
				</Link>
				<button
					onClick={async () => {
						const status = await DeleteData(userId);
						if (status === 200) {
							contextFun();
							history.replace('/dashboard/all-products');
						} else {
							alert('Error try again');
						}
					}}
				>
					<i className='fas fa-trash'></i>
					<span>Delete</span>
				</button>
			</div>
			<hr />
			{/* <h2>
        View UserProductData{" "}
        {state
          ? state.map((user) => (
              <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.gender}</p>
              </div>
            ))
          : null}
      </h2> */}

			<div className='container-fluid m-0 p-0'>
				<div className='container-sm row m-auto my-md-4 my-3'>
					<div className='card-header card bg-secondary text-center text-white '>
						<h2>UserProduct</h2>
					</div>

					<>
						{state
							? state.map((user) => (
									<div
										key={user.id}
										className='col card p-0 p-md-auto'
										style={{ background: 'lightgrey' }}
									>
										<div className='col col-md-4 mx-auto'>
											<img
												src={user.avatar}
												alt='user_Avatar'
												className='img-thumbnail rounded-circle my-3'
												width='96%'
												height='75px'
											/>
										</div>
										<div className='col  card-body text-center p-0 p-md-auto'>
											<h1>{user.name}</h1>
											<p>{user.email}</p>
											<p>{user.job}</p>
											<p>{user.country}</p>
											<p>{user.phone}</p>
										</div>
									</div>
							  ))
							: null}
					</>
				</div>
			</div>
		</Dashboard>
	);
};

export default UserProduct;

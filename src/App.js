import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductContext from './context/ProductContext';
import GetProducts from './pages/GetProducts';
import NewProduct from './pages/NewProduct';
import UserProduct from './pages/UserProduct';
import EditProduct from './pages/EditProduct';
import HomePage from './HomePage';
import Data from './config/DataFetch';

function App() {
	return (
		<>
			<ProductContext>
				<Switch>
					<Route path='/dashboard/all-products'>
						<GetProducts />
					</Route>
					<Route path='/dashboard/create-product'>
						<NewProduct />
					</Route>
					<Route path='/dashboard/view-product/:id'>
						<UserProduct />
					</Route>
					<Route path='/dashboard/editProduct/:id'>
						<EditProduct />
					</Route>
					<Route path='/dashboard'>
						<HomePage />
					</Route>
					<Route path='/data'>
						<Data />
					</Route>
					<Route path='/'>
						<Redirect to='/dashboard'></Redirect>
					</Route>
				</Switch>
			</ProductContext>
		</>
	);
}

export default App;

import React from 'react';
import DataFetch from '../config/DataFetch';

export const productData = React.createContext(null);
export const productDataUpdater = React.createContext(null);

export default function ProductContext({ children }) {
	const [state, setState] = React.useState(null);

	const dataUpdater = () => {
		DataFetch()
			.then((val) => {
				console.log(val);
				setState(val);
			})
			.catch((e) => console.log(e));
	};
	React.useEffect(() => {
		dataUpdater();
	}, []);

	return (
		<>
			<productData.Provider value={state}>
				<productDataUpdater.Provider value={dataUpdater}>
					{children}
				</productDataUpdater.Provider>
			</productData.Provider>
		</>
	);
}

import { Outlet } from 'react-router-dom';

import { EntireContextProvider } from '../../context';
import Header from '../Header';

const Detail = () => {
	return (
		<EntireContextProvider>
			<Header />
			<Outlet />
		</EntireContextProvider>
	);
};

export default Detail;

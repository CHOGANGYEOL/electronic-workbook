import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { EntireContextProvider } from './context';
import { router } from './lib/reactRouterDom/router';
import { GlobalStyle } from './lib/styledComponents/GlobalStyle';
import Theme from './lib/styledComponents/Theme';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<ToastContainer autoClose={2500} theme="colored" closeButton={false} />
			<EntireContextProvider>
				<RouterProvider router={router} />
			</EntireContextProvider>
		</ThemeProvider>
	);
}

export default App;

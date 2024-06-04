import { createHashRouter } from 'react-router-dom';

import Root from '../../layout/Root';
import { Pages } from '../../pages';

export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Pages.Main />,
			},
			{
				path: ':key',
				element: <Pages.Test />,
			},
		],
	},
]);

import { createBrowserRouter } from 'react-router-dom';

import Detail from '../../layout/Detail';
import Root from '../../layout/Root';
import { Pages } from '../../pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Pages.Main />,
			},
			{
				path: ':key',
				element: <Detail />,
				children: [
					{
						index: true,
						element: <Pages.Data />,
					},
					{
						path: ':questionId',
						element: <Pages.Question />,
					},
				],
			},
		],
	},
]);

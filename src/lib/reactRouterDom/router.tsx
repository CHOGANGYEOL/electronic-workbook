import { createHashRouter } from 'react-router-dom';

import Detail from '../../layout/Detail';
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
				element: <Detail />,
				children: [
					{
						path: '',
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

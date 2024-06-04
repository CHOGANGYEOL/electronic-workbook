import { Navigate } from 'react-router-dom';

import context from '../../context';

const Question = () => {
	const { question } = context.detail.useState();

	if (!question) {
		return <Navigate to={'/'} />;
	} else {
		return <></>;
	}
};

export default Question;

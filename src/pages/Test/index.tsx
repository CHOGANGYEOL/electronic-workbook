import { useMemo } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { ALL_DATA } from '../../assets/data';

const Test = () => {
	const { key } = useParams();
	const data = useMemo(() => {
		return ALL_DATA.find((el) => el.key === key);
	}, [key]);

	if (!data) {
		return <Navigate to={'/'} />;
	} else {
		return <>{data.title}</>;
	}
};

export default Test;

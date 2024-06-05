import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import Title from '../../components/Common/Title';
import context from '../../context';
import Header from '../Header';
import { VStack } from '../../components/Common';

const Detail = () => {
	const { data } = context.detail.useState();

	if (!data) return <Navigate to={'/'} />;

	return (
		<React.Fragment>
			<Header />
			<VStack $gap="2.4rem">
				<Title prefix={data.title}>Electronic Workbook</Title>
				<Outlet />
			</VStack>
		</React.Fragment>
	);
};

export default Detail;

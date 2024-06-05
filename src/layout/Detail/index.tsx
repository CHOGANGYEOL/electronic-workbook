import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { VStack } from '../../components/Common';
import Title from '../../components/Common/Title';
import context from '../../context';
import Header from '../Header';

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

import { Outlet, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

import { VStack } from '../../components/Common';
import Loading from '../../components/Common/Loading';
import Title from '../../components/Common/Title';
import context from '../../context';

const Root = () => {
	const { state } = useNavigation();
	const { data } = context.detail.useState();
	return (
		<Container>
			{state === 'loading' && <Loading />}
			<section id="inner">
				<VStack $gap="2.4rem">
					<Title prefix={data?.title}>Electronic Workbook</Title>
					<Outlet />
				</VStack>
			</section>
		</Container>
	);
};

const Container = styled.main`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	/* background: linear-gradient(-45deg, ${({ theme }) =>
		`${theme.colors.primary[600]}, ${theme.colors.primary[400]}`}); */
	background: linear-gradient(-135deg, ${({ theme }) => `${theme.colors.gray[800]}, ${theme.colors.gray[600]}`});
	padding: 7.4rem 2.4rem 4rem;
	#inner {
		width: 100%;
		max-width: 50rem;
	}
`;

export default Root;

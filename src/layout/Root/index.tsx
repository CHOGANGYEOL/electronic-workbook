import { Outlet, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

import Loading from '../../components/Common/Loading';

const Root = () => {
	const { state } = useNavigation();
	return (
		<Container>
			{state === 'loading' && <Loading />}
			<section id="inner">
				<Outlet />
			</section>
		</Container>
	);
};

const Container = styled.main`
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background: linear-gradient(-45deg, ${({ theme }) => `${theme.colors.primary[600]}, ${theme.colors.primary[400]}`});
	/* background-color: ${({ theme }) => theme.colors.primary[500]}; */
	padding: 4rem 2.4rem;
	#inner {
		width: 100%;
		max-width: 50rem;
	}
`;

export default Root;

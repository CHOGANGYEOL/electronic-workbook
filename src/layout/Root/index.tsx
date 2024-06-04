import { Outlet, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

import Loading from '../../components/Common/Loading';

const Root = () => {
	const { state } = useNavigation();
	return (
		<Container>
			{state === 'loading' && <Loading />}
			<Outlet />
		</Container>
	);
};

const Container = styled.main`
	display: flex;
	justify-content: center;
	min-height: 100vh;
`;

export default Root;

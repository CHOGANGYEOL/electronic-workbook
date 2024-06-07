import styled from 'styled-components';

import { Children } from '../../../components/Common/types';

const RequestBody = ({ children }: Children) => {
	return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.black};
	${({ theme }) => theme.font.body[2]};
	padding: 1rem;
	ul,
	ol {
		padding: 1rem 0 1rem 2rem;
		li {
			padding: 0.4rem 0;
		}
	}
`;
export default RequestBody;

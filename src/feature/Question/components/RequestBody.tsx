import styled from 'styled-components';

import { Children } from '../../../components/Common/types';

const RequestBody = ({ children }: Children) => {
	return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
	border: 1px solid ${({ theme }) => theme.colors.black};
	${({ theme }) => theme.font.body[2]};
	padding: 1rem;
`;
export default RequestBody;

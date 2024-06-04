import styled from 'styled-components';

import { Children } from '../types';

const Title = ({ children }: Children) => {
	return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.h2`
	${({ theme }) => theme.font.headline[2]};
	color: ${({ theme }) => theme.colors.white};
`;

export default Title;

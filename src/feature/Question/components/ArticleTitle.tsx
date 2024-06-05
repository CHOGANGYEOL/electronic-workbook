import styled from 'styled-components';

import { Children } from '../../../components/Common/types';

const ArticleTitle = ({ children }: Children) => {
	return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.h4`
	padding: 0.8rem 0 1.2rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;

export default ArticleTitle;

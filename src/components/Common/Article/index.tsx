import styled from 'styled-components';

import { CSS, Children } from '../types';

const Article = ({ children, $css }: Children & CSS) => {
	return <Wrapper {...{ $css }}>{children}</Wrapper>;
};

const Wrapper = styled.article<CSS>`
	padding: 2rem;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 4px;
	width: 100%;
	box-shadow: ${({ theme }) => theme.shadow.modal};
	${({ $css }) => $css}
`;

export default Article;

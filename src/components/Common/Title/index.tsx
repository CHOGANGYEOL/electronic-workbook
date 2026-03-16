import React from 'react';

import styled from 'styled-components';

interface TitleProps {
	prefix?: React.ReactNode;
}
const Title = ({ children, prefix }: React.PropsWithChildren<TitleProps>) => {
	return (
		<Wrapper>
			{children}
			{prefix && <p className="title--prefix">{prefix}</p>}
		</Wrapper>
	);
};
const Wrapper = styled.h2`
	${({ theme }) => theme.font.headline[2]};
	color: ${({ theme }) => theme.colors.white};
	.title--prefix {
		${({ theme }) => theme.font.title[1]};
	}
`;

export default Title;

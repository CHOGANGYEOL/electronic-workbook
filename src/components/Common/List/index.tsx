import React from 'react';

import styled, { css } from 'styled-components';

interface StyleProps {
	$hasBorder?: boolean;
	$listStyle?: string;
	$gap?: string;
}

interface ListProps<T> extends StyleProps {
	items: T[];
	renderItem: (item: T, idx: number) => React.ReactNode;
}

const List = <T extends object | string>({
	items,
	renderItem,
	$hasBorder = true,
	$listStyle = 'none',
	$gap = '0.8rem',
}: ListProps<T>) => {
	return (
		<Wrapper {...{ $hasBorder, $listStyle, $gap }}>
			{items.map((item, idx) => (
				<li key={'list--' + String(idx)}>{renderItem(item, idx)}</li>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.ol<StyleProps>`
	display: flex;
	flex-direction: column;
	gap: ${({ $gap }) => $gap};
	${({ $listStyle }) =>
		$listStyle !== 'none' &&
		css`
			padding-left: 2rem;
		`};
	li {
		${({ $hasBorder }) =>
			$hasBorder &&
			css`
				&:not(:last-child) {
					padding-bottom: 0.8rem;
					border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
				}
			`};
		list-style: ${({ $listStyle }) => $listStyle};
	}
`;

export default List;

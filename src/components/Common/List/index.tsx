import React from 'react';

import styled, { css } from 'styled-components';

interface StyleProps {
	$hasBorder?: boolean;
}

interface ListProps<T> extends StyleProps {
	items: T[];
	renderItem: (item: T, idx: number) => React.ReactNode;
}

const List = <T extends object | string>({ items, renderItem, $hasBorder = true }: ListProps<T>) => {
	return (
		<Wrapper {...{ $hasBorder }}>
			{items.map((item, idx) => (
				<li key={'list--' + String(idx)}>{renderItem(item, idx)}</li>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.ul<StyleProps>`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	li {
		${({ $hasBorder }) =>
			$hasBorder &&
			css`
				&:not(:last-child) {
					padding-bottom: 0.8rem;
					border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
				}
			`}
	}
`;

export default List;

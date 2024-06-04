import React from 'react';

import styled from 'styled-components';

interface ListProps<T> {
	items: T[];
	renderItem: (item: T) => React.ReactNode;
}

const List = <T extends object>({ items, renderItem }: ListProps<T>) => {
	return (
		<Wrapper>
			{items.map((item, idx) => (
				<li key={'list--' + String(idx)}>{renderItem(item)}</li>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.ul``;

export default List;

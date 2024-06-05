import React from 'react';

import styled, { css } from 'styled-components';

import { Content } from '../../../assets/data/types';
import { VStack } from '../../../components/Common';
import List from '../../../components/Common/List';

interface StyleProps {
	$isActive: boolean;
	$isCorrect: boolean;
	$isWrong: boolean;
	$readonly: boolean;
}

type ConditionFunction = (item: React.ReactNode, idx: number) => boolean;

interface ItemProps {
	readonly?: boolean;
	content: Content;
	condition: {
		active: ConditionFunction;
		correct: ConditionFunction;
		wrong: ConditionFunction;
	};
	onItemClick?: (item: React.ReactNode, idx: number) => void;
}
const Item = ({ content, condition, onItemClick, readonly = false }: ItemProps) => {
	return (
		<VStack $gap="2.4rem">
			<VStack $gap="1.2rem">
				<ItemHead>
					<span>{content.contentIdx}.</span>
					<p>{content.question}</p>
				</ItemHead>
				{content.questionBody}
			</VStack>
			<List
				$hasBorder={false}
				items={content.answer}
				$listStyle={'auto'}
				$gap="1.2rem"
				renderItem={(item, idx) => (
					<ListItem
						$readonly={readonly}
						onClick={() => {
							onItemClick && onItemClick(item, idx);
						}}
						$isActive={condition.active(item, idx)}
						$isCorrect={condition.correct(item, idx)}
						$isWrong={condition.wrong(item, idx)}
					>
						{item}
					</ListItem>
				)}
			/>
		</VStack>
	);
};

const ItemHead = styled.h5`
	display: flex;
	gap: 0.6rem;
	${({ theme }) => theme.font.title[3]}
	p {
	}
`;

const ListItem = styled.div<StyleProps>`
	${({ theme }) => theme.font.body[2]}
	${({ $isActive }) =>
		$isActive &&
		css`
			font-weight: 600;
		`}
	${({ $isWrong, theme }) =>
		$isWrong &&
		css`
			color: ${theme.colors.red[500]};
		`}
	${({ $isCorrect, theme }) =>
		$isCorrect &&
		css`
			color: ${theme.colors.blue[500]};
			font-weight: 600;
		`}

    ${({ $readonly }) =>
		$readonly &&
		css`
			pointer-events: none;
		`}
`;

export default Item;

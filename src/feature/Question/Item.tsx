import styled, { css } from 'styled-components';

import { Content } from '../../assets/data/types';
import { HStack, VStack } from '../../components/Common';
import List from '../../components/Common/List';

interface StyleProps {
	$isActive: boolean;
	$isCorrect: boolean;
	$isWrong: boolean;
	$readonly: boolean;
}

type ConditionFunction = (item: string, idx: number) => boolean;

interface ItemProps {
	readonly?: boolean;
	content: Content;
	condition: {
		active: ConditionFunction;
		correct: ConditionFunction;
		wrong: ConditionFunction;
	};
	onItemClick?: (item: string, idx: number) => void;
}
const Item = ({ content, condition, onItemClick, readonly = false }: ItemProps) => {
	return (
		<VStack $gap="2.4rem">
			<HStack $gap="1.2rem">
				<ItemHead>
					{content.contentIdx}. {content.question}
				</ItemHead>
				{content.questionBody}
			</HStack>
			<List
				$hasBorder={false}
				items={content.answer}
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
						{(idx + 1).toString()}. {item}
					</ListItem>
				)}
			/>
		</VStack>
	);
};

const ItemHead = styled.h4`
	${({ theme }) => theme.font.title[2]}
`;

const ListItem = styled.p<StyleProps>`
	${({ theme }) => theme.font.body[1]}
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

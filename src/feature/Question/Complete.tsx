import React, { useMemo, useState } from 'react';

import styled from 'styled-components';

import Item from './Item';
import { QuestionHistoryList } from './useQuestion/types';
import { Button } from '../../components/Button';
import { VStack } from '../../components/Common';
import Divide from '../../components/Common/Divide';

interface CompleteProps {
	history: QuestionHistoryList;
}
const Complete = ({ history }: CompleteProps) => {
	const [isWrong, setWrong] = useState(false);
	const wrongData = useMemo(() => history.filter((data) => data.selectCorrect !== data.correct), [history]);
	return (
		<VStack $gap="2.4rem">
			<VStack $gap="1.6rem">
				{(isWrong ? wrongData : history).map((data, idx) => (
					<React.Fragment key={'complete__item--' + String(data.contentIdx)}>
						<Item
							readonly
							content={data}
							condition={{
								active: (_, itemIdx) => {
									return data.selectCorrect === itemIdx + 1;
								},
								correct: (_, itemIdx) => {
									return data.correct === itemIdx + 1;
								},
								wrong: (_, itemIdx) => {
									return data.selectCorrect === itemIdx + 1 && data.correct !== itemIdx + 1;
								},
							}}
						/>
						{((isWrong && wrongData.length - 1 !== idx) || (!isWrong && history.length - 1 !== idx)) && <Divide />}
					</React.Fragment>
				))}
			</VStack>
			<Divide />
			<WrongButton
				onClick={() => {
					setWrong((prev) => !prev);
				}}
			>
				{isWrong ? '전체 보기' : '틀린 문제만 보기'}
			</WrongButton>
		</VStack>
	);
};

const WrongButton = styled(Button)`
	position: sticky;
	bottom: 1.2rem;
`;

export default Complete;

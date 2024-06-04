import React from 'react';

import Item from './Item';
import { QuestionHistoryList } from './useQuestion/types';
import { VStack } from '../../components/Common';
import Divide from '../../components/Common/Divide';

interface CompleteProps {
	history: QuestionHistoryList;
}
const Complete = ({ history }: CompleteProps) => {
	return (
		<VStack $gap="1.6rem">
			{history.map((data, idx) => (
				<React.Fragment key={'complete__item--' + String(idx)}>
					<Item
						readonly
						content={data}
						contentIdx={idx}
						condition={{
							active: (_, idx) => {
								return data.selectCorrect === idx;
							},
							correct: (_, idx) => {
								return data.correct === idx + 1;
							},
							wrong: (_, idx) => {
								return data.selectCorrect === idx && data.correct !== idx;
							},
						}}
					/>
					{history.length - 1 !== idx && <Divide />}
				</React.Fragment>
			))}
		</VStack>
	);
};

export default Complete;

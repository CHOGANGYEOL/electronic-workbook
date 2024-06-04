import Item from './Item';
import { QuestionHistoryList } from './useQuestion/types';
import { VStack } from '../../components/Common';

interface CompleteProps {
	history: QuestionHistoryList;
}
const Complete = ({ history }: CompleteProps) => {
	return (
		<VStack>
			{history.map((data, idx) => (
				<Item
					readonly
					key={'complete__item--' + String(idx)}
					content={data}
					contentIdx={idx}
					condition={{
						active: (_, idx) => {
							return data.selectCorrect === idx;
						},
						correct: (_, idx) => {
							return data.correct === idx;
						},
						wrong: (_, idx) => {
							return data.selectCorrect === idx && data.correct !== idx;
						},
					}}
				/>
			))}
		</VStack>
	);
};

export default Complete;

import { useCallback, useMemo, useState } from 'react';

import { QuestionHistoryList } from './types';
import context from '../../../context';

const useQuestion = () => {
	const { question } = context.detail.useState();
	const [isConfirm, setConfirm] = useState(false);

	const handleConfirm = useCallback(() => {
		setConfirm((prev) => !prev);
	}, []);

	const [selectIdx, setSelectIdx] = useState<number | null>(null);

	const [currentIdx, setCurrentIdx] = useState(0);

	const isLast = useMemo(() => question && question.contents.length - 1 === currentIdx, [question, currentIdx]);

	const content = useMemo(() => question?.contents[currentIdx], [question, currentIdx]);
	const [history, setHistory] = useState<QuestionHistoryList>([]);
	const [isComplete, setComplete] = useState(false);

	const onSelect = useCallback(() => {
		setHistory((prev) => {
			const tmpHistory = [...prev];
			tmpHistory[currentIdx] = { ...content!, selectCorrect: selectIdx! };
			return tmpHistory;
		});
		if (!isLast) {
			setCurrentIdx((prev) => (prev += 1));
		} else {
			setComplete(true);
		}
	}, [content, selectIdx]);

	const count = useMemo(
		() => history.reduce((acc, cur) => (cur.correct === cur.selectCorrect ? acc + cur.score : acc), 0),
		[history],
	);
	return {
		count,
		onSelect,
		content,
		history,
		isLast,
		currentIdx,
		selectIdx,
		setSelectIdx,
		handleConfirm,
		isConfirm,
		isComplete,
	};
};
export default useQuestion;

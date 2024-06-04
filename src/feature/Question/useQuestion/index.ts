import { useCallback, useMemo, useState } from 'react';

import { toast } from 'react-toastify';

import { QUESTION_MESSAGE } from './const';
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

	const content = useMemo(() => question?.contents[currentIdx], [question, currentIdx]);
	const [history, setHistory] = useState<QuestionHistoryList>([]);

	const onSelect = useCallback(() => {
		setHistory((prev) => {
			const tmpHistory = [...prev];
			tmpHistory[currentIdx] = { ...content!, selectCorrect: selectIdx! };
			return tmpHistory;
		});
	}, [content, selectIdx]);

	const handleNext = useCallback(() => {
		if (question && question.contents.length - 1 !== currentIdx) {
			setCurrentIdx((prev) => (prev += 1));
		} else {
			toast.error(QUESTION_MESSAGE.NEXT_ERROR);
		}
	}, []);

	const count = useMemo(
		() => history.reduce((acc, cur) => (cur.correct === cur.selectCorrect ? acc + cur.score : acc), 0),
		[history],
	);
	return {
		count,
		onSelect,
		content,
		history,
		handleNext,
		currentIdx,
		selectIdx,
		setSelectIdx,
		handleConfirm,
		isConfirm,
	};
};
export default useQuestion;

import { useCallback, useMemo, useState } from 'react';

import { QuestionHistoryList } from './types';
import { Question } from '../../../assets/data/types';

const useQuestion = (question?: Question) => {
	// 현제 문제 idx
	const [currentIdx, setCurrentIdx] = useState(0);

	// idx에 맞는 문제 object
	const content = useMemo(() => question?.contents[currentIdx], [question, currentIdx]);

	// 정답 확인 여부
	const [isConfirm, setConfirm] = useState(false);
	// 정답 확인 handler
	const handleConfirm = useCallback(() => {
		setConfirm((prev) => !prev);
	}, []);

	// 선택한 정답 idx
	const [selectIdx, setSelectIdx] = useState<number | null>(null);

	const handleSelectIdx = useCallback((idx: number) => {
		setSelectIdx((prev) => (prev === idx ? null : idx));
	}, []);

	// 마지막 문제인지 여부
	const isLast = useMemo(() => question && question.contents.length - 1 === currentIdx, [question, currentIdx]);

	// 문제 내역 저장
	const [history, setHistory] = useState<QuestionHistoryList>([]);

	// 시험 종료 여부
	const [isComplete, setComplete] = useState(false);
	// 시험 종료 함수
	const handleClose = useCallback(() => {
		setComplete(true);
	}, []);

	// 해설보기 open
	const [isDescOpen, setDescOpen] = useState(false);

	const handleDescOpen = useCallback(() => {
		setDescOpen((prev) => !prev);
	}, []);

	// 선택 후 다음 || 확인 버튼 클릭시
	const onSelect = useCallback(() => {
		try {
			setHistory((prev) => {
				const tmpHistory = [...prev];
				tmpHistory[currentIdx] = { ...content!, selectCorrect: selectIdx! + 1 };
				return tmpHistory;
			});
			if (!isLast) {
				setCurrentIdx((prev) => (prev += 1));
			} else {
				handleClose();
			}
		} finally {
			setConfirm(false);
			setSelectIdx(null);
			setDescOpen(false);
		}
	}, [content, selectIdx]);

	// 점수
	const count = useMemo(
		() => history.reduce((acc, cur) => (cur.correct === cur.selectCorrect ? acc + (cur.score ?? 1) : acc), 0),
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
		handleSelectIdx,
		handleConfirm,
		isConfirm,
		isComplete,
		handleClose,
		isDescOpen,
		handleDescOpen,
	};
};
export default useQuestion;

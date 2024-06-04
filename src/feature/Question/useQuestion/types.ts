import { Content } from '../../../assets/data/types';

interface QuestionHistory extends Content {
	selectCorrect: number; // 선택한 번호
}

type QuestionHistoryList = QuestionHistory[];

export type { QuestionHistory, QuestionHistoryList };

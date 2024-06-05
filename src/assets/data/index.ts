import { Data, Question } from './types';
import { usingComputer } from './UsingComputer';

export const ALL_DATA: Data[] = [usingComputer];

export const MOCK_QUESTION_DATA: Question = {
	questionId: 1,
	createAt: 2020,
	order: 1,
	total: 60,
	contents: [
		{
			contentIdx: 0,
			question: '',
			answer: [],
			correct: 2,
			score: 1,
		},
	],
};

export const MOCK_DATA: Data = {
	title: '',
	key: '',
	questions: [MOCK_QUESTION_DATA],
};

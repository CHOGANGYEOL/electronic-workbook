import { Data, Question } from './types';
import UsingComputer from './UsingComputer';

export const ALL_DATA: Data[] = [UsingComputer];

export const MOCK_QUESTION_DATA: Question = {
	questionId: 1,
	createAt: 2020,
	order: 1,
	total: 60,
	contents: [
		{
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

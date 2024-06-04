import { Question } from '../types';

export default <Question>{
	questionId: 1,
	createAt: 2020,
	order: 2,
	total: 60,
	contents: [
		{
			contentId: 1,
			question: '다음 중 사운드의 압축 및 복원과 관련된 기술에 해당하지 않는 것은?',
			answer: ['FLAC', 'AIFF', 'H.264', 'WAV'],
			correct: 3,
			score: 1,
		},
	],
};

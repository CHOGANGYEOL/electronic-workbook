import { Question } from '../types';

export default <Question>{
	questionId: 1,
	createAt: 2020,
	order: 1,
	total: 60,
	contents: [
		{
			question: '다음 중 사운드의 압축 및 복원과 관련된 기술에 해당하지 않는 것은?',
			answer: ['FLAC', 'AIFF', 'H.264', 'WAV'],
			correct: 3,
			score: 1,
		},
		{
			question:
				'다음 중 컴퓨터 게임이나 컴퓨터 기반 훈련과 같이 사용자와의 상호작용을 통해 진행 상황을 제어하는 멀티미디어의 특징을 나타내는 용어는?',
			answer: ['선형 콘텐츠', '비선형 콘텐츠', 'VR 콘텐츠', '4D 콘텐츠'],
			correct: 2,
			score: 1,
		},
		{
			question: '',
			answer: [],
			correct: 2,
			score: 1,
		},
	],
};

import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const TS_2026_03: Question = {
	questionId: 202603,
	title: '테셋공부방',
	contents: [
		{
			contentId: 1,
			question: '아래 나열한 내용 중 국내총생산(GDP)의 정의를 설명할 수 있는 것들을 모두 고르면?',
			questionBody: <RequestBody></RequestBody>,
			answer: ['ㄱ,ㄴ,ㄷ,ㅇ', 'ㄱ,ㄷ,ㅂ,ㅅ', 'ㄴ,ㄹ,ㅁ,ㅂ', 'ㄷ,ㄹ,ㅁ,ㅅ', 'ㅁ,ㅂ,ㅅ,ㅇ'],
			correct: 4,
		},
	],
};

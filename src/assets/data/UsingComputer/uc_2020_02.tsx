import RequestBody from '../../../feature/Question/components/RequestBody';
import { Question } from '../types';

export const uc_2020_02: Question = {
	questionId: 2,
	createAt: 2020,
	order: 2,
	contents: [
		{
			contentIdx: 31,
			question: '다음 중 아래의 프로시저가 실행된 후 [A1] 셀에 입력되는 값으로 옳은 것은?',
			questionBody: (
				<RequestBody>
					Sub 예제( ) <br />
					&nbsp;&nbsp;Test = 0 <br />
					&nbsp;&nbsp;Do Until Test {'>'} 10 <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Test = Test + 1 <br />
					&nbsp;&nbsp;Loop <br />
					&nbsp;&nbsp;Range{'("'}A1{'")'}.Value = Test <br />
					End Sub
				</RequestBody>
			),
			answer: ['10', '11', '0', '55'],
			correct: 2,
		},
	],
};

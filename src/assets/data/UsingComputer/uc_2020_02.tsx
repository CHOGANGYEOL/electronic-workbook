import { Question } from '../types';

export const uc_2020_02: Question = {
	questionId: 2,
	createAt: 2020,
	order: 2,
	contents: [
		{
			contentIdx: 26,
			question: '다음 중 입력 데이터에 사용자 지정 표시 형식을 설정한 경우 그 표시 결과로 옳지 않은 것은?',
			questionBody: (
				<table>
					<tr>
						<td>입력 데이터</td>
						<td>표시 형식</td>
						<td>표시 결과</td>
					</tr>
				</table>
			),
			answer: [
				<table key={'content__01--01'}>
					<tr>
						<td>123.456</td>
						<td>#.#</td>
						<td></td>
					</tr>
				</table>,
				<table key={'content__01--02'}>
					<tr>
						<td>0</td>
						<td>#</td>
						<td>123.5</td>
					</tr>
				</table>,
				<table key={'content__01--03'}>
					<tr>
						<td>100</td>
						<td>##.##</td>
						<td>100.00</td>
					</tr>
				</table>,
				<table key={'content__01--04'}>
					<tr>
						<td>12345</td>
						<td>#,###</td>
						<td>12,345</td>
					</tr>
				</table>,
			],
			correct: 3,
		},
	],
};

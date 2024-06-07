import IMAGES from './images';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const UC_2024_01: Question = {
	questionId: 202401,
	title: '2024대비 필수함수문제30선',
	contents: [
		{
			contentId: 1,
			question:
				'다음 중 아래의 [A1:E5] 영역에서 B열과 D열에만 배경색을 설정하기 위한 조건부 서식의 규칙으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_1} />,
			answer: [
				'=MOD(COLUMNS($A1), 2)=1',
				'=MOD(COLUMNS(A$1), 2)=0',
				'=MOD(COLUMN($A1), 2)=0',
				'=MOD(COLUMN(A$1), 2)=0',
			],
			correct: 4,
			description: (
				<RequestBody>
					<ul>
						<li>
							열 번호가 짝수인 열에 서식을 지정해야 하므로, COLUMN 함수를 이용하여 각 셀의 열 번호를 구합니다.
							<ul>
								<li>COLUMN(셀) : 주어진 ‘셀’의 열 번호를 구함</li>
								<li>COLUMNS(셀 범위) : 주어진 ‘셀 범위’의 열 개수를 구함</li>
							</ul>
						</li>
						<li>
							[A1:E5] 영역에 있는 각 셀을 모두 비교하여 셀 단위로 서식을 지정할 때는 =MOD(COLUMN(A1), 2)=0으로, 조건에
							맞는 데이터가 있는 열 전체에 서식을 지정하려면 행 번호 앞에 $를 붙여 =MOD(COLUMN(A$1), 2)=0으로
							입력합니다. 두 경우의 결과는 동일합니다.
						</li>
						<li>
							[A1:E5] 영역을 범위로 지정한 후 조건부 서식의 규칙을 =MOD(COLUMN(A$1), 2)=0으로 지정하면 열별로 수식이
							아래와 같이 변경되어 각 열을 비교합니다. <br />
							=MOD(COLUMN(A$1), 2)=0 <br />
							=MOD(COLUMN(B$1), 2)=0 <br />
							=MOD(COLUMN(C$1), 2)=0 <br />
							=MOD(COLUMN(D$1), 2)=0 <br />
							=MOD(COLUMN(E$1), 2)=0
						</li>
					</ul>
				</RequestBody>
			),
		},
	],
};

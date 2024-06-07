import React from 'react';

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
						맞는 데이터가 있는 열 전체에 서식을 지정하려면 행 번호 앞에 $를 붙여 =MOD(COLUMN(A$1), 2)=0으로 입력합니다.
						두 경우의 결과는 동일합니다.
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
			),
		},
		{
			contentId: 2,
			question: '[A1:C3] 영역에 대해 조건부 서식의 규칙을 다음과 같이 설정할 경우 결과 화면으로 옳은 것은?',
			questionBody: (
				<RequestBody>
					규칙 : =MOD($A1, 2) = MOD(A$1, 2) <br />
					배경색 : 회색
				</RequestBody>
			),
			answer: [
				<img src={IMAGES.Img_2_1} key={'uc_2024_01_02-01'} />,
				<img src={IMAGES.Img_2_2} key={'uc_2024_01_02-02'} />,
				<img src={IMAGES.Img_2_3} key={'uc_2024_01_02-03'} />,
				<img src={IMAGES.Img_2_4} key={'uc_2024_01_02-04'} />,
			],
			correct: 2,
			description: (
				<ul>
					<li>
						=MOD($A1,2)를 입력했을 때의 각 셀의 결과는 다음과 같습니다.
						<br />
						<img src={IMAGES.Img_2_5_1} />→<img src={IMAGES.Img_2_5_2} />
					</li>
					<li>
						=MOD(A$1,2)를 입력했을 때의 각 셀의 결과는 다음과 같습니다.
						<br />
						<img src={IMAGES.Img_2_5_1} />→<img src={IMAGES.Img_2_5_3} />
					</li>
					<li>
						두 수식의 결과가 같은 셀에 서식이 적용되므로, 서식 적용 결과는 다음과 같습니다.
						<br />
						<img src={IMAGES.Img_2_2} />
					</li>
				</ul>
			),
		},
		{
			contentId: 3,
			question:
				'아래 워크시트에서 성취도[C2:C6]는 성취율[B2:B6]을 10%로 나눈 값만큼 표시한 것으로, 성취율이 70%를 초과하면 “■”를, 그 외는 “□”을 반복하여 표시하였다. 다음 중 이를 위한 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_3} />,
			answer: [
				'=REPLACE(QUOTIENT(B2, 10%), IF(B2>70%, “■”, “□” ))',
				'=REPT(QUOTIENT(B2, 10%), IF(B2>70%, “■”, “□”))',
				'=REPLACE(IF(B2>70%, “■”, “□”), QUOTIENT(B2, 10%))',
				'=REPT(IF(B2>70%, “■”, “□”), QUOTIENT(B2, 10%))',
			],
			correct: 4,
			description: (
				<React.Fragment>
					=REPT(IF(B2{'>'}70%, “■”, “□”), QUOTIENT(B2, 10%)) <br />❶ IF(B2{'>'}70%, “■”, “□”) : [B2] 셀의 값 98%가
					70%보다 크므로 ■를 반환합니다. <br />❷ QUOTIENT(B2, 10%) : [B2] 셀의 값 98%를 10%로 나눈 값 9를 반환합니다.
					<br />❸ =REPT(❶, ❷) → =REPT(“■”, 9) : “■”를 9번 반복하여 표시합니다.
				</React.Fragment>
			),
		},
		{
			contentId: 4,
			question: '다음 중 수식과 그 실행 결과값의 연결이 옳지 않은 것은?',
			answer: [
				'=DAYS(“2020-11-1”,“2020-10-1”) → 31',
				'=ROUNDDOWN(45.6789,2) → 45.67',
				'=SUMPRODUCT({1,2,3},{5,6,7}) → 32',
				'=SQRT(4)*(INT(-2)+POWER(2,3)) → 12',
			],
			correct: 3,
			description: (
				<ol>
					<li>=DAYS(“2020-11-1”, “2020-10-1”) : ‘2020-11-1’에서 ‘2020-10-1’을 뺀 일수인 31을 반환합니다.</li>
					<li>=ROUNDDOWN(45.6789, 2) : 45.6789를 소수점 이하 둘째 자리로 자리 내림한 45.67을 반환합니다.</li>
					<li>
						=SUMPRODUCT(
						{'{'}(1, 2, 3){'}'}, {'{'}(5, 6, 7){'}'}) : 배열에서 대응하는 요소를 모두 곱하고 그 곱을 합한 (1×5) + (2×6)
						+ (3×7) = 38을 반환합니다.
					</li>
					<li>
						=SQRT(4)*(INT(-2)+POWER(2, 3))
						<ol>
							<li>SQRT(4) : 4의 양의 제곱근인 2를 반환합니다.</li>
							<li>INT(-2) : -2보다 크지 않은 정수인 -2를 반환합니다.</li>
							<li>POWER(2, 3) : 2를 3번 곱한 8을 반환합니다.</li>
							<li>∴ =❶*(❷+❸) = 2*(-2+8) = 12</li>
						</ol>
					</li>
				</ol>
			),
		},
	],
};

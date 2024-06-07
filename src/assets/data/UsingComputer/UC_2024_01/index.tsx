import React from 'react';

import IMAGES from './images';
import { VStack } from '../../../../components/Common';
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
		{
			contentId: 5,
			question:
				'다음 중 아래의 워크시트에서 ‘윤정희’ 사원의 근속년수를 오늘 날짜를 기준으로 구하고자 할 때, [E11] 셀에 입력할 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_5} />,
			answer: [
				'=YEAR(TODAY( ))-YEAR(VLOOKUP(C11, B4:E10, 2, 0))',
				'=YEAR(TODAY( ))-YEAR(HLOOKUP(C11, B4:E10, 2, 0))',
				'=YEAR(TODAY( ))-YEAR(VLOOKUP(C11, C4:E10, 2, 0))',
				'=YEAR(TODAY( ))-YEAR(HLOOKUP(C11, C4:E10, 2, 0))',
			],
			correct: 3,
			description: (
				<VStack $gap={'1.2rem'}>
					=YEAR( TODAY( ) ) - YEAR( VLOOKUP(C11, C4:E10, 2, 0) )
					<ol>
						<li>TODAT( ) : 오늘의 날짜를 구합니다(오늘 날짜를 2023-5-1로 가정함).</li>
						<li>YEAR(❶) : 오늘의 날짜에서 년도만을 표시합니다(2023).</li>
						<li>
							VLOOKUP(C11, C4:E10, 2, 0) : [C4:E10] 영역의 첫 번째 열에서 윤정희(C11)와 정확히 일치하는 값을 찾은 후 이
							값이 있는 행에서 지정된 열(2) 위치에 있는 데이터를 입력합니다(2018-03-02).{' '}
						</li>
						<li>YEAR(❸) : ‘2018-03-02’에서 년도만 표시하므로 2018이 됩니다. </li>
						<li>※ 2023-2018은 5입니다.</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 6,
			question:
				'다음 중 10,000,000원을 2년간 연 5.5%의 이자율로 대출할 때, 매월 말 상환해야 할 불입액을 구하기 위한 수식으로 옳은 것은?',
			answer: [
				'=PMT(5.5%/12, 12*2, -10000000)',
				'=PMT(5.5%, 12*2, -10000000)',
				'=PMT(5.5%, 12*2, -10000000,0,1)',
				'=PMT(5.5%/12, 12*2, -10000000,0,1)',
			],
			correct: 1,
			description: (
				<ul>
					<li>=PMT(5.5%/12, 2*12, -10000000)</li>
					<li>
						PMT 함수는 PMT(이자, 기간, 현재 가치, 미래 가치, 납입 시점)과 같이 인수를 지정하며, 각각의 인수는 다음과
						같이 적용됩니다.
					</li>
					<li>이자 : 이율이 연 단위이므로 12로 나누면 5.5%/12입니다.</li>
					<li>기간 : 기간이 년 단위이므로 12를 곱하면 2*12입니다.</li>
					<li>
						현재가치 : 대출금을 현재 받았으므로 현재 가치이고, 결과가 양수로 나오도록 음수로 입력하면 -10000000입니다.
					</li>
					<li>미래가치 : 0이므로 생략합니다. \n• 납입시점 : 매월 말이므로 생략합니다.</li>
				</ul>
			),
		},
		{
			contentId: 7,
			question:
				'아래 시트에서 판매금액이 3,000,000 이상인 제품의 개수를 구하는 배열 수식으로 맞는 것은? (단 판매 금액은 ‘판매단가 × 수량’이다.)',
			questionBody: <img src={IMAGES.Img_7} />,
			answer: [
				'{=SUM((B2:C2*B5:C5>=3000000)*1)}',
				'{=COUNT((B2:C2*B5:C5>=3000000)*1)}',
				'{=SUM((B2:B5*C2:C5>=3000000)*1)}',
				'{=COUNT((B2:B5*C2:C5>=3000000)*1)}',
			],
			correct: 3,
			description: (
				<VStack $gap="1.2rem">
					조건이 하나일 때 배열 수식을 이용하여 개수를 구하는 방법은 다음의 3가지 방법이 있습니다.
					<RequestBody>
						<ul>
							<li>
								방법1 : {'{'}=SUM( (조건1) * (조건2) ){'}'}
							</li>
							<li>
								방법2 : {'{'}=SUM( IF(조건1, IF(조건2, 1) ) ){'}'}
							</li>
							<li>
								방법3 : {'{'}=COUNT( IF(조건1, IF(조건2, 1) ) ){'}'}
							</li>
						</ul>
					</RequestBody>
					<ol>
						<li>
							조건과 범위 찾기
							<ul>
								<li>
									조건 : 판매금액이 3,000,000 이상이란 조건은, 비교 대상이 될 판매금액과 비교할 기준이 되는 3,000,000을
									“{'>'}=”로 연결하여 적어주면 됩니다(판매금액{'>'}=3000000).
								</li>
								<li>
									판매금액 : 판매단가와 같은 위치에 대응하는 수량을 모두 곱하여 동시에 결과를 계산하려면 ‘B2:B5*C2:C5’로
									입력합니다.
								</li>
								<li>∴ B2:B5*C2:C5{'>'}=3000000</li>
							</ul>
						</li>
						<li>
							위의 조건을 개수 구하기 배열 수식에 대입하면 다음과 같습니다.
							<RequestBody>
								<ul>
									<li>
										방법1 : {'{'}=SUM( (B2:B5*C2:C5{'>'}=3000000)*1 ){'}'}
									</li>
									<li>
										방법2 : {'{'}=SUM( IF(B2:B5*C2:C5{'>'}
										=3000000, 1) ){'}'}
									</li>
									<li>
										방법3 : {'{'}=COUNT( IF(B2:B5*C2:C5{'>'}
										=3000000, 1) ){'}'}
									</li>
								</ul>
							</RequestBody>
						</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 8,
			question: '다음 중 아래 시트에서 <변경 전> 내용을 <변경 후>와 같이 변경하는 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_8} />,
			answer: [
				'=SUBSTITUTE(A2, “136”, “36”, 1)',
				'=SUBSTITUTE(A2, “136”, “36”, 2)',
				'=SUBSTITUTE(A2, “36”, “136”, 1)',
				'=SUBSTITUTE(A2, “36”, “136”, 2)',
			],
			correct: 3,
			description: (
				<ul>
					<li>
						SUBSTITUTE(텍스트, 인수1, 인수2, n번째) 함수는 ‘텍스트’에서 ‘인수1’을 찾아, n번째에 있는 ‘인수1’을 ‘인수2’로
						변경합니다.{' '}
					</li>
					<li>
						{'<'}변경 전{'>'}과 {'<'}변경 후{'>'}를 비교하면 [A2] 셀에 입력된 텍스트 중 첫 번째에 있는 “36”을 “136”으로
						변경하였으므로 =SUBSTITUTE(A2, “36”, “136”, 1)로 지정하면 됩니다.
					</li>
				</ul>
			),
		},
		{
			contentId: 9,
			question: '다음 중 수식의 결과가 옳지 않은 것은?',
			answer: [
				'=FIXED(3456.789, 1, FALSE) → 3,456.8',
				'=EOMONTH(DATE(2015, 2, 25), 1) → 2015-03-31',
				'=CHOOSE(ROW(A3:A6), “동”, “서”, “남”, 2015) → 남',
				'=REPLACE(“February”, SEARCH(“U”, “Seoul-Unesco”), 5, “”) → Febru',
			],
			correct: 4,
			description: (
				<ol>
					<li>
						=FIXED(3456.789, 1, FALSE) : FIXED(인수, 자릿수, 논리값)는 인수를 반올림하여 지정된 자릿수까지 텍스트로
						표시합니다. 논리값이 FALSE이거나 생략되면 텍스트에 쉼표가 포함되므로 3456.789를 소수점 첫째 자리(1)로
						반올림한 값 3,456.8이 표시됩니다.
					</li>
					<li>
						=EOMONTH(DATE(2015, 2, 25), 1) : EOMONTH(날짜, 월수)는 지정한 날짜를 기준으로 몇 개월 이전 또는 이후 달의
						마지막 날짜의 일련번호를 구하는 함수입니다. 2015년 2월 25일을 기준으로 1개월 이후 달의 마지막 날짜는 2015년
						3월 31일입니다.
					</li>
					<li>
						=CHOOSE(ROW(A3:A6), “동”, “서”, “남”, 2015)요
						<ol>
							<li>
								ROW(A3:A6) : ROW(셀)는 주어진 셀의 행 번호를 구하는 함수입니다. ‘ROW(A3:A6)’과 같이 ROW 함수의 인수를
								특정 셀이 아닌 범위를 지정하면 범위의 첫 번째 셀인 ‘A3’ 셀의 행 번호를 구합니다. A3 셀의 행 번호인 3을
								반환합니다.
							</li>
							<li>
								=CHOOSE(❶, “동”, “서”, “남”, 2015) → =CHOOSE(3, “동”, “서”, “남”, 2015) : CHOOSE(인수, 첫 번째, 두 번째,
								...)는 인수가 1이면 첫 번째를, 인수가 2이면 두 번째를 선택하는 함수입니다. “동”, “서”, “남”, 2015 중 세
								번째에 있는 값인 “남”이 표시됩니다.
							</li>
						</ol>
					</li>
					<li>
						=REPLACE(“February”, SEARCH(“U”, “Seoul-Unesco”), 5, “”)
						<ol>
							<li>
								SEARCH(“U”, “Seoul-Unesco”) : SEARCH(텍스트1, 텍스트2, 시작 위치)는 ‘텍스트2’에서 ‘시작위치’부터
								‘텍스트1’을 찾아 위치를 표시하는 함수로 영문 대·소문자를 구분하지 않습니다. “Seoul-Unesco”에서 “U”를
								찾아 위치를 표시하면 4입니다.
								<br />※ 시작 위치를 생략하면 첫 번째 글자부터 찾아 표시합니다.
							</li>
							<li>
								=REPLACE(“February”, ❶, 5, “”) → =REPLACE(“February”, 4, 5, “”) : REPLACE(텍스트1, 시작 위치, 개수,
								텍스트2)는 ‘텍스트1’의 ‘시작 위치’에서 ‘개수’로 지정된 문자를 ‘텍스트2’로 변경하는 함수입니다.
								“February”에서 네 번째 글자부터 다섯 글자를 빈칸으로 변경하면 “Feb”입니다.
							</li>
						</ol>
					</li>
				</ol>
			),
		},
		{
			contentId: 10,
			question:
				'아래 워크시트에서 자격증 응시자에 대한 과목별 점수의 합계를 배열 수식으로 구하였다. 다음 중 [C10] 셀에 입력된 배열 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_10} />,
			answer: [
				'{=SUM(IF($B$2:$B$7=B10, $C$2:$C$7))}',
				'{=SUM(IF(MOD(ROW($C$2:$C$7), 2)=1, $C$2:$C$7))}',
				'{=SUM(IF(C2:C7, B2:B7=B10))}',
				'{=SUM(IF(MOD(ROWS(C2:C7), 2)=0, C2:C7))}',
			],
			correct: 1,
			description: (
				<VStack>
					<ul>
						<li>
							합계를 구하는 배열 수식은 다음의 두 가지 식이 있으며, 조건의 개수에 따라 조건을 지정하는 부분 만
							늘어납니다.
							<RequestBody>
								<ul>
									<li>
										방법 1 : {'{'}=SUM( (조건) * 합계를_구할_범위 ) {'}'}
									</li>
									<li>
										방법 2 : {'{'}=SUM( IF( (조건), 합계를_구할_범위 ) ){'}'}
									</li>
								</ul>
							</RequestBody>
						</li>
					</ul>
					<ol>
						<li>
							조건과 범위 찾기
							<ul>
								<li>
									조건 : 과목별 점수란 조건은, 비교 대상이 될 지점 범위 [B2:B7]와 비교할 기준이 되는 “1과목”이 들어있는
									[B10] 셀을 “=”으로 연결하여 적어주면 됩니다(B2:B7=B10).{' '}
								</li>
								<li>합계를_구할_범위 : 점수이므로 C2:C7이 됩니다.</li>
							</ul>
						</li>
						<li>
							위의 조건과 범위를 합계 구하기 배열 수식에 대입하면 다음과 같습니다.
							<RequestBody>
								<ul>
									<li>방법 1 : =SUM( (B2:B7=B10) * C2:C7 )</li>
									<li>방법 2 : =SUM( IF( B2:B7=B10, C2:C7 ) )</li>
								</ul>
							</RequestBody>
						</li>
					</ol>
					<ul>
						<li>이 문제는 여러 결과값을 구하는 수식으로, 범위를 절대 참조로 지정하여 작성해야 합니다.</li>
						<li>
							‘방법2’를 절대 참조로 지정하여 입력한 후 [Ctrl]+[Shift]+[Enter]를 누르면 중괄호({'{'} {'}'})가 표시되므로{' '}
							{'{'}=SUM(IF($B$2:$B$7=B10, $C$2:$C$7)){'}'}로 표시됩니다.
						</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 11,
			question: '다음과 같은 시트에서 [A8] 셀에 아래의 수식을 입력했을 때 계산 결과로 올바른 것은?',
			questionBody: (
				<VStack>
					<RequestBody>=COUNT(OFFSET(D6, -5, -3, 2, 2))</RequestBody>
					<img src={IMAGES.Img_11} />
				</VStack>
			),
			answer: ['4', '1', '120', '74'],
			correct: 2,
			description: (
				<VStack>
					=COUNT(OFFSET(D6, -5, -3, 2, 2))
					<ol>
						<li>
							OFFSET(D6, -5, -3, 2, 2) : [D6] 셀을 기준으로 {'–'}5행, -3열 떨어진 셀 주소([A1])를 찾습니다. 이 주소를
							기준으로 2행, 2열의 범위(A1:B2)를 지정합니다.
							<br />※ OFFSET(범위, 행, 열, 높이, 너비) 함수에서 행과 열로 지정한 인수가 음수(-)일 경우에는 선택한
							범위에서 위쪽(행) 또는 왼쪽(열)으로 이동합니다.
						</li>
						<li>=COUNT(❶) → =COUNT(A1:B2) : [A1:B2] 영역에서 수치 데이터(B2)의 개수를 구합니다(1).</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 12,
			question:
				'다음 워크시트에서 [G3:G6] 영역에 월요일부터 금요일까지 모두 출석(√)하면 “우수”, 그렇지 않으면 빈칸을 표시하려고 할 때 옳은 수식은?',
			questionBody: <img src={IMAGES.Img_12} />,
			answer: [
				'=IF(COUNT(B3:F3)=5, “우수”, “”)',
				'=IF(COUNTA(B3:F3)=5, “우수”, “”)',
				'=IF(NOT(COUNTBLANK(B3:F3)=5), “우수”, “”)',
				'=IF(COUNTIF(B3:F3, “”)=5, “”, “우수”)',
			],
			correct: 2,
			description: (
				<VStack>
					=IF(COUNTA(B3:F3)=5, “우수”, “”)
					<ol>
						<li>COUNTA(B3:F3) : [B3:F3] 영역의 셀 개수인 5를 반환합니다.</li>
						<li>=IF(❶=5, “우수”, “”) → =IF(5=5, “우수”, “”) : 조건이 참이므로 우수를 반환합니다.</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 13,
			question:
				'아래 워크시트에서 매출액[B3:B9]을 이용하여 매출 구간별 빈도수를 [F3:F6] 영역에 계산한 후 그 값 만큼 “★”를 반복하여 표시하고자 한다. 다음 중 이를 위한 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_13} />,
			answer: [
				'=REPT(“★”, FREQUENCY(E3:E6, B3:B9))',
				'=REPT(“★”, FREQUENCY(B3:B9, E3:E6))',
				'{=REPT(“★”, FREQUENCY(E3:E6, B3:B9))}',
				'{=REPT(“★”, FREQUENCY(B3:B9, E3:E6))}',
			],
			correct: 4,
			description: (
				<VStack>
					{'{=REPT(“★”, FREQUENCY(B3:B9, E3:E6))}'}
					<ol>
						<li>
							FREQUENCY(B3:B9, E3:E6) : [B3:B9] 영역의 데이터를 대상으로 [E3:E6] 영역의 구간별 빈도수를 계산합니다.
						</li>
						<li>
							=REPT(“★”, ❶) : “★”를 ❶의 결과값만큼 반복하여 표시합니다.
							<br />※ FREQUENCY 함수는 결과가 여러 개의 값을 갖는 배열로 반환되므로 배열 수식으로 작성해야 합니다.
						</li>
					</ol>
					<ul>
						<li>
							결과가 계산될 [F3:F6] 영역을 블록으로 지정하고 =REPT(“★”, FREQUENCY(B3:B9, E3:E6))을 입력한 후
							[Ctrl]+[Shift]+[Enter]를 누르면 수식 앞뒤에 중괄호({'{}'})가 자동으로 입력되어
							{' {=REPT(“★”, FREQUENCY(B3:B9, E3:E6))}'}과 같이 표시됩니다.
						</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 14,
			question:
				'아래 그림과 같이 워크시트에 배열 상수 형태로 배열 수식이 입력되어 있을 때, [A5] 셀에서 수식 =SUM(A1, B2)를 실행하였다. 다음 중 그 결과로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_14_1} />,
			answer: ['3', '5', '6', '7'],
			correct: 2,
			description: (
				<ul>
					<li>배열 상수를 입력할 때 열의 구분은 쉼표(,)로, 행의 구분은 세미콜론(;)으로 합니다.</li>
					<li>
						[A1:C2] 영역을 블록으로 지정한 후 ={'{1,3,5;2,4,6}'}을 입력하고 [Ctrl]+[Shift]+[Enter]를 누르면 다음과 같이
						입력됩니다.
						<br />
						<img src={IMAGES.Img_14_2} />
						<br />※ 문제에 제시된 그림은 이 상태에서 [Ctrl]+[~]를 눌러 값이 아닌 수식을 화면에 표시한 것입니다.
					</li>
				</ul>
			),
		},
		{
			contentId: 15,
			question:
				'아래의 시트에서 [A8] 셀에 ‘=INDEX(A1:C6, MATCH(LARGE(C2: C6,3), C1:C6, 0), 2)’ 수식을 입력했을 때의 계산 결과로 올바른 것은?',
			questionBody: <img src={IMAGES.Img_15} />,
			answer: ['남궁민', '이수진', '서수남', '김정미'],
			correct: 2,
			description: (
				<VStack>
					=INDEX(A1:C6, MATCH(LARGE(C2:C6, 3), C1:C6, 0), 2)
					<ol>
						<li>LARGE(C2:C6, 3) : [C2:C6] 영역에서 3번째로 큰 값을 구하면 결과는 5328000입니다.</li>
						<li>
							MATCH(❶, C1:C6, 0) → MATCH(5328000, C1:C6, 0) : [C1:C6] 영역에서 5328000과 정확히 일치하는 값을 찾은 후
							상대 위치를 표시하면 결과는 4입니다.
							<ul>
								<li>
									MATCH(찾을 값, 범위, 옵션) 함수에서 ‘옵션’을 0으로 지정하면 ‘찾을 값’과 정확히 일치하는 값을 찾습니다.
								</li>
							</ul>
						</li>
						<li>
							❸ =INDEX(A1:C6, ❷, 2) → =INDEX(A1:C6, 4, 2) : [A1:C6] 영역에서 4행 2열 즉, [B4] 셀의 값 이수진을
							반환합니다.
						</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 16,
			question: '다음 그림과 같이 ‘성’과 ‘이름’을 합쳐서 ‘성명’으로 표시하고자 할 때, [C2] 셀에 들어갈 알맞은 수식은?',
			questionBody: <img src={IMAGES.Img_16} />,
			answer: ['=PROPER(A2, B2)', '=REPLACE(A2, B2)', '=CONCAT(A2, B2)', '=TEXT(A2, B2)'],
			correct: 3,
			description: (
				<ul>
					<li>PROPER(텍스트) : ‘텍스트’의 첫 글자만 대문자로 표시함</li>
					<li>
						REPLACE(텍스트1, 시작 위치, 개수, 텍스트2) : ‘텍스트1’의 ‘시작 위치’에서 ‘개수’로 지정된 문자를 ‘텍스트2’로
						변경함
					</li>
					<li>CONCAT(텍스트1, 텍스트2, ...) : 인수로 주어진 텍스트들을 연결하여 1개의 문자열로 합침</li>
					<li>TEXT(인수, 형식) : ‘인수’를 지정한 ‘형식’의 텍스트로 바꿈</li>
				</ul>
			),
		},
		{
			contentId: 17,
			question: '다음 중 수식의 결과가 옳지 않은 것은?',
			questionBody: <img src={IMAGES.Img_17} />,
			answer: [
				'=FIXED(A5, , FALSE) → 3.14',
				'=REPT(“◆”, LEN(A4)) → ◆◆◆◆',
				'{=TEXT(SUM(IF(ISTEXT(A1:A5), 1, 0)), “과일의 수는 0개”)} → 과일의 수는 4개',
				'=REPLACE(A3, 2, 2, “가피나무”) → 오가피나무',
			],
			correct: 1,
			description: (
				<ol>
					<li>
						=FIXED(A5, , FALSE) : FIXED 함수의 ‘자릿수’를 생략하면 2로 지정되고, ‘논리값’을 FALSE 또는 생략하면 쉼표를
						포함하므로 3.14659를 소수점 둘째 자리로 반올림한 3.15를 반환합니다.
						<br />※ [A5] 셀의 값 3.14659는 정수 부분이 한 자리이므로 쉼표, 즉 천 단위 구분 기호는 표시되지 않음. 예를
						들어 [A5] 셀의 값이 1234.14659라면 1,234.15로 표시됩니다.
					</li>
					<li>=REPT(“◆”, LEN(A4)) : “◆”를 [A4] 셀(PEAR)의 글자 수만큼 4번 반복한 ◆◆◆◆를 반환합니다.</li>
					<li>
						{'{=TEXT(SUM(IF(ISTEXT(A1:A5), 1, 0)),“과일의 수는 0개”)}'}
						<br />
						<ol>
							<li>
								SUM(IF(ISTEXT(A1:A5), 1, 0)) : 조건에 만족하는 셀의 개수를 구하는 배열 수식으로, [A1:A5] 영역에서 인수가
								텍스트인 셀의 개수인 4를 반환합니다.
							</li>
							<li>
								{'{=TEXT(❶, “과일의 수는 0개”)} → {=TEXT(4, “과일의 수는 0개”)}'} : 4를 “과일의 수는 0개” 형식으로
								표시한 과일의 수는 4개를 반환합니다.
							</li>
						</ol>
					</li>
					<li>
						=REPLACE(A3, 2, 2, “가피나무”) : [A3] 셀의 값 “오렌지”의 2번째부터 2글자를 “가피나무”로 변경한 오가피나무를
						반환합니다.
					</li>
				</ol>
			),
		},
		{
			contentId: 18,
			question: '다음 중 수식의 결과가 나머지 셋과 다른 것은?',
			questionBody: <img src={IMAGES.Img_18} />,
			answer: [
				'=CHOOSE(ROWS(A2:B6), A2, A3, A4, A5, A6)',
				'=CHOOSE(N(B5), A2, A3, A4, A5, A6)',
				'=CHOOSE(CELL(“contents”, B2), A2, A3, A4, A5, A6)',
				'=CHOOSE(TYPE(B4), A2, A3, A4, A5, A6)',
			],
			correct: 1,
			description: (
				<ol>
					<li>
						=CHOOSE(ROWS(A2:B6), A2, A3, A4, A5, A6)
						<ol>
							<li>ROWS(A2:B6) : [A2:B6] 영역의 행의 수인 5를 반환합니다.</li>
							<li>
								=CHOOSE(❶, A2, A3, A4, A5, A6) → =CHOOSE(5, A2, A3, A4, A5, A6) : 다섯 번째에 있는 [A6] 셀의 값인
								식기세척기를 반환합니다.
							</li>
						</ol>
					</li>
					<li>
						=CHOOSE(N(B5), A2, A3, A4, A5, A6) : N(B5)는 [B5] 셀의 값 ‘TRUE’의 숫자값 1을 반환하므로, 결과는 첫 번째에
						있는 [A2] 셀의 값인 건조기를 반환합니다.
					</li>
					<li>
						=CHOOSE(CELL(“contents”, B2), A2, A3, A4, A5, A6) : CELL(“contents”, B2)에서 ‘contents’는 셀의 값을
						의미하므로 [B2] 셀의 값인 1을 반환하므로 결과는 첫 번째에 있는 [A2] 셀의 값인 건조기를 반환합니다.
					</li>
					<li>
						=CHOOSE(TYPE(B4), A2, A3, A4, A5, A6) : TYPE(B4)는 [B4] 셀에 입력된 값이 숫자이므로 1을 반환하므로 결과는 첫
						번째에 있는 [A2] 셀의 값인 건조기를 반환합니다.
					</li>
				</ol>
			),
		},
		{
			contentId: 19,
			question: '다음 중 아래의 워크시트에서 수식의 결과로 “부사장”을 출력하지 않는 것은?',
			questionBody: <img src={IMAGES.Img_19} />,
			answer: [
				'=CHOOSE(CELL(“row”, B3), C2, C3, C4, C5, C6)',
				'=CHOOSE(TYPE(B4), C2, C3, C4, C5, C6)',
				'=OFFSET(A1:A6, 2, 2, 1, 1)',
				'=INDEX(A2:D6,MATCH(A3, A2:A6, 0), 3)',
			],
			correct: 1,
			description: (
				<ol>
					<li>
						=CHOOSE(CELL(“row”, B3), C2, C3, C4, C5, C6)
						<ol>
							<li>CELL(“row”,B3) : ‘row’는 행 번호를 의미하므로 CELL 함수는 [B3] 셀의 행 번호인 3을 반환합니다.</li>
							<li>
								=CHOOSE(❶, C2, C3, C4, C5, C6) → =CHOOSE(3, C2, C3, C4, C5, C6) : 세 번째에 있는 [C4] 셀의 값을
								표시하므로 결과는 영업 사원입니다.
							</li>
						</ol>
					</li>
					<li>
						=CHOOSE(TYPE(B4), C2, C3, C4, C5, C6)
						<ol>
							<li>TYPE(B4) : [B4] 셀에 입력된 값이 텍스트이므로 결과는 2입니다.</li>
							<li>
								=CHOOSE(❶, C2, C3, C4, C5, C6) → =CHOOSE(2, C2, C3, C4, C5, C6) : 두 번째에 있는 [C3] 셀의 값을
								표시하므로 결과는 부사장입니다.
							</li>
						</ol>
					</li>
					<li>
						=OFFSET(A1:A6, 2, 2, 1, 1) : [A1:A6] 영역의 첫 번째 셀인 [A1] 셀을 기준으로 2행 2열 떨어진 셀 주소([C3])를
						찾습니다. 이 주소를 기준으로 1행 1열인 셀 즉, [C3] 셀의 값을 표시하므로 결과는 부사장입니다.
					</li>
					<li>
						=INDEX(A2:D6, MATCH(A3, A2:A6, 0), 3)
						<ol>
							<li>
								MATCH(A3, A2:A6, 0) : [A2:A6] 영역에서 [A3] 셀의 값과 동일한 값을 찾은 후 상대 위치를 표시하면 결과는
								2입니다.
							</li>
							<li>
								=INDEX(A2:D6, ❶, 3) → =INDEX(A2:D6, 2, 3) : [A2:D6] 영역에서 2행 3열 즉, [C3] 셀의 값은 표시하므로
								결과는 부사장입니다.
							</li>
						</ol>
					</li>
				</ol>
			),
		},
		{
			contentId: 20,
			question:
				'아래 워크시트에서 순위[G2:G10]는 총점을 기준으로 구하되 동점자에 대해서는 국어를 기준으로 순위를 구하였다. 다음 중 [G2] 셀에 입력된 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_20_1} />,
			answer: [
				'{=RANK($F2, $F$2:$F$10)+RANK($B$2, $B$2:$B$10)}',
				'{=RANK($B$2, $B$2:$B$10)*RANK($F2, $F$2:$F$10)}',
				'{=RANK($F2, $F$2:$F$10)+SUM(($F$2:$F$10=$F2)*($B$2:$B$10>$B2))}',
				'{=SUM(($F$2:$F$10=$F2)*($B$2:$B$10>$B2))*RANK($F2, $F$2:$F$10)}',
			],
			correct: 3,
		},
		{
			contentId: 21,
			question:
				'아래 워크시트에서 단가표[A10:D13]를 이용하여 단가[C2:C7]를 배열수식으로 계산하고자 한다. 다음 중 [C2] 셀에 입력된 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_21} />,
			answer: [
				'{=INDEX($B$12:$D$13, MATCH(A2, $A$12:$A$13, 0), MATCH(B2, $B$10:$D$10, 1))}',
				'{=INDEX($B$12:$D$13, MATCH(A2, $A$12:$A$13, 1), MATCH(B2, $B$10:$D$10, 0))}',
				'{=INDEX(MATCH(A2, $A$12:$A$13, 0), MATCH(B2, $B$10:$D$10, 1), $B$12:$D$13)}',
				'{=INDEX(MATCH(A2, $A$12:$A$13, 1), MATCH(B2, $B$10:$D$10, 0), $B$12:$D$13)}',
			],
			correct: 1,
			description: (
				<VStack>
					{'{=INDEX($B$12:$D$13, MATCH(A2, $A$12:$A$13, 0), MATCH(B2, $B$10:$D$10, 1))}'}
					<ol>
						<li>
							MATCH(A2, $A$12:$A$13, 0) : [A12:A13] 영역에서 [A2] 셀, 즉 “허브차”와 동일한 값을 찾은 후 상대 위치를
							표시하면 결과는 1입니다.
							<ul>
								<li>
									MATCH(찾을 값, 범위, 옵션) 함수에서 ‘옵션’을 0으로 지정하면 ‘찾을 값’과 정확히 일치하는 값을 찾습니다.
								</li>
								<li>여러 셀에 결과를 구해야 하므로 범위는 절대 참조로 지정해야 합니다.</li>
							</ul>
						</li>
						<li>
							MATCH(B2, $B$10:$D$10, 1) : [B10:D10] 영역에서 [B2] 셀, 즉 35보다 작거나 같은 값 중에서 가장 근접한
							값(30)을 찾은 후 상대 위치를 표시하면 결과값은 2입니다.
						</li>
						<li>
							=INDEX($B$12:$D$13, ❶, ❷) → =INDEX($B$12:$D$13, 1, 2)) : [B12:D13] 영역에서 1행 2열 즉, [C12] 셀의 값
							2500을 반환합니다.
						</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 22,
			question: '셀 범위 [A1:C4]에 대한 각 보기의 수식을 실행하였을 때 다음 중 결과 값이 다른 것은?',
			questionBody: <img src={IMAGES.Img_22} />,
			answer: [
				'=INDEX(A1:C4, MATCH(“배”, A1:A4, 0), 1)',
				'=INDEX(A1:C4, 4, 2)',
				'=INDEX(A1:C4, MATCH(2300, C1:C4, 0), 2)',
				'=INDEX(B3:C4, 2, 1)',
			],
			correct: 1,
			description: (
				<ol>
					<li>
						=INDEX(A1:C4, MATCH(“배”, A1:A4, 0), 1)
						<ol>
							<li>MATCH(“배”, A1:A4, 0) : [A1:A4] 영역에서 ‘배’가 입력된 셀의 상대 위치를 계산합니다(4).</li>
							<li>
								=INDEX(A1:C4, ❶, 1) → =INDEX(A1:C4, 4, 1) : [A1:C4] 영역에서 4행 1열, 즉 [A4] 셀에 입력된 값인 배를
								표시합니다.
							</li>
						</ol>
					</li>
					<li>=INDEX(A1:C4, 4, 2) : [A1:C4] 영역에서 4행 2열, 즉 [B4] 셀에 입력된 값인 40을 출력합니다.</li>
					<li>
						=INDEX(A1:C4, MATCH(2300, C1:C4, 0), 2)
						<ol>
							<li>MATCH(2300, C1:C4, 0) : [C1:C4] 영역에서 2300이 입력된 셀의 상대 위치를 계산합니다(4).</li>
							<li>
								=INDEX(A1:C4, ❶, 2) → =INDEX(A1:C4, 4, 2) : [A1:C4] 영역에서 4행 2열 즉, [B4] 셀에 입력된 값인 40을
								출력합니다.
							</li>
						</ol>
					</li>
					<li>=INDEX(B3:C4, 2, 1) : [B3:C4] 영역에서 2행 1열, 즉 [B4] 셀에 입력된 값인 40을 출력합니다.</li>
				</ol>
			),
		},
		{
			contentId: 23,
			question:
				'아래 시트에서 각 부서마다 직위별로 종합점수의 합계를 구하려고 한다. 다음 중 [B17] 셀에 입력된 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_23} />,
			answer: [
				'{=SUMIFS($E$2:$E$13, $A$2:$A$13, $A$17, $B$2:$B$13, $B$16)}',
				'{=SUM(($A$2:$A$13=A17) * ($B$2:$B$13=B16) * $E$2:$E$13)}',
				'{=SUM(($A$2:$A$13=$A17) * ($B$2:$B$13=B$16) * $E$2:$E$13)}',
				'{=SUM(($A$2:$A$13=A$17) * ($B$2:$B$13=$B16) * $E$2:$E$13)}',
			],
			correct: 3,
			description: (
				<VStack>
					<ul>
						<li>
							합계를 구하는 배열 수식은 다음의 두 가지 식이 있으며, 조건의 개수에 따라 조건을 지정하는 부분만
							늘어납니다.
							<RequestBody>
								<ul>
									<li>방법1 : {'{=SUM( (조건1)*(조건2)*합계를_구할_범위 )}'}</li>
									<li>방법2 : {'{=SUM( IF( (조건1)*(조건2), 합계를_구할_범위 ) )}'}</li>
								</ul>
							</RequestBody>
						</li>
					</ul>
					<ol>
						<li>
							조건과 범위 찾기
							<ul>
								<li>
									조건1 : 부서마다란 조건은, 비교 대상이 될 부서명 범위 [A2:A13]과 비교할 기준이 되는 “영업부”가
									들어있는 [A17] 셀을 “=”으로 연결하여 적어주면 됩니다(A2:A13=A17).
								</li>
								<li>
									조건2 : 직위별이란 조건은, 비교 대상이 될 직위 범위 [B2:B13]과 비교할 기준이 되는 “부장”이 들어있는
									[B16] 셀을 “=”으로 연결하여 적어주면 됩니다(B2:B13=B16).
								</li>
								<li>합계를_구할_범위 : 총점 점수이므로 [E2:E13]이 됩니다.</li>
							</ul>
						</li>
						<li>
							위의 조건과 범위를 합계 구하기 배열 수식에 대입하면 다음과 같습니다
							<RequestBody>
								<ul>
									<li>방법1 : {'{=SUM( (A2:A13= A17) * (B2:B13= B16) * E2:E13 )}'}</li>
									<li>방법2 : {'{=SUM( IF( (A2:A13= A17) * (B2:B13= B16), E2:E13 ) )}'}</li>
								</ul>
							</RequestBody>
						</li>
					</ol>
					<ul>
						<li>
							이 문제는 여러 셀에 결과값을 구하는 수식으로, 범위는 절대 참조로 지정해야 하지만, A17 셀의 경우는 A18,
							A19와 같이 열이 고정되고 행만 변경되어야 하므로 $A17로 지정하고, B16 셀의 경우는 C16, D16과 같이 행은
							고정되고 열만 변경되어야 하므로 B$16으로 지정해야 합니다.
						</li>
						<li>
							‘방법1’을 =SUM(($A$2:$A$13=$A17)*($B$2:$B$13=B$16)*$E$2:$E$13)으로 입력한 후 [Ctrl]+[Shift]+[Enter]를
							누르면 중괄호({'{ }'})가 표시되어 {'{=SUM(($A$2:$A$13=$A17)*($B$2:$B$13=B$16)*$E$2:$E$13)}'}으로
							표시됩니다.
						</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 24,
			question:
				'다음과 같이 [A1:A6]의 이름이 SCORES일 때 [A7] 셀에 아래의 함수를 입력하였다. 그 결과 값으로 옳지 않은 것은?',
			questionBody: <img src={IMAGES.Img_24} />,
			answer: [
				'=ROUNDUP(AVERAGE(SCORES), 0) → 2',
				'=TRUNC(SUM(SCORES)/COUNT(SCORES), 0) → 2',
				'=ROUND(SUM(SCORES)/COUNTA(SCORES), 0) → 1',
				'=AVERAGEA(A1:A6) → 1',
			],
			correct: 2,
			description: (
				<ol>
					<li>
						=ROUNDUP(AVERAGE(SCORES), 0)
						<ol>
							<li>
								AVERAGE(SCORES) : SCORES로 이름 정의된 영역(A1:A6)의 평균인 5/4=1.25를 반환합니다. 논리값 TRUE가 숫자로
								처리되지 않아 계산 시 제외됩니다.
							</li>
							<li>=ROUNDUP(❶, 0) → =ROUNDUP(1.25, 0) : 1.25를 소수점 이하 첫째 자리에서 올림하여 2를 반환합니다.</li>
						</ol>
					</li>
					<li>
						=TRUNC(SUM(SCORES) / COUNT(SCORES), 0)
						<ol>
							<li>SUM(SCORES) : SCORES로 이름 정의된 영역(A1:A6)의 합계인 5를 반환합니다.</li>
							<li>COUNT(SCORES) : SCORES로 이름 정의된 영역(A1:A6)에서 숫자가 들어 있는 셀의 개수인 4를 반환합니다.</li>
							<li>=TRUNC(❶/❷, 0) → =TRUNC(5/4, 0) : 5를 4로 나눈 후 소수점 이하를 버린 1을 반환합니다.</li>
						</ol>
					</li>
					<li>
						=ROUND(SUM(SCORES) / COUNTA(SCORES), 0)
						<ol>
							<li>SUM(SCORES) : SCORES로 이름 정의된 영역(A1:A6)의 합계인 5를 반환합니다.</li>
							<li>
								COUNTA(SCORES) : SCORES로 이름 정의된 영역(A1:A6)에서 데이터가 들어 있는 셀의 개수인 6을 반환합니다.
							</li>
							<li>
								=ROUND(❶/❷, 0) → =ROUND(5/6, 0) : 5를 6으로 나눈 후 소수점 이하 첫째 자리에서 반올림하여 1을 반환합니다.
							</li>
						</ol>
					</li>
					<li>
						=AVERAGEA(A1:A6) : 수치가 아닌 셀을 포함하는 인수의 평균인 6/6=1을 반환합니다. 논리값 TRUE가 숫자 1로
						처리되어 계산 시 포함됩니다.
					</li>
				</ol>
			),
		},
		{
			contentId: 25,
			question: '다음과 같은 식을 입력하였을 때의 설명으로 틀린 것은?',
			questionBody: <RequestBody>=Format(Now( ), “m/d”)</RequestBody>,
			answer: [
				'Format은 계산 결과에 표시 형식을 지정하는 함수이다.',
				'Now는 현재 날짜와 시간을 표시해주는 함수이다.',
				'컨트롤에 입력되는 식은 =로 시작해야 한다.',
				'오늘 날짜가 ‘2024-06-03’이면 06/03으로 표시된다.',
			],
			correct: 4,
			description:
				'Format 함수의 표시 형식으로 m/d와 같이 월과 일이 모두 한 자리로 지정되었으므로 오늘 날짜가 2024-06-03인 경우 6/3으로 표시됩니다.',
		},
		{
			contentId: 26,
			question:
				'[매출 실적 관리] 폼의 ‘txt평가’ 컨트롤에는 ‘txt매출수량’ 컨트롤의 값이 1,000 이상이면 “우수”, 500 이상이면 “보통”, 그 미만이면 “저조”라고 표시하고자 한다. 다음 중 ‘txt평가’의 컨트롤 원본으로 옳지 않은 것은?',
			answer: [
				'=IIf([txt매출수량]<500, “저조”, IIf(txt매출수량>=1000, “우수”, “보통”))',
				'=IIf([txt매출수량]<500, “저조”, IIf(txt매출수량>=500, “보통”, “우수”))',
				'=IIf([txt매출수량]>=1000, “우수”, IIf([txt매출수량]>=500, “보통”, “저조”))',
				'=IIf([txt매출수량]>=500, IIf([txt매출수량]<1000, “보통”, “우수”), “저조”)',
			],
			correct: 3,
			description: (
				<ul>
					<li>2번 함수식은 [txt매출수량]이 500 미만이면 “저조”, 500 이상이면 “보통”, 나머지는 “우수”로 표시합니다.</li>
					<li>[txt매출수량]이 1000 이상이어도 500 이상일 경우에 해당하므로 “우수”가 아닌 “보통”이 표시됩니다.</li>
				</ul>
			),
		},
		{
			contentId: 27,
			question:
				'다음 중 보고서에서 ‘페이지 번호’를 표현하는 식을 다음과 같이 설정한 경우 페이지 번호가 표시되는 결과로 옳은 것은?',
			questionBody: <RequestBody>=IIf([page] Mod 2 = 0, [page] & “페이지”, “ ”)</RequestBody>,
			answer: [
				'짝수 페이지에는 “2”와 같이 표시되고 홀수 페이지에는 표시되지 않는다.',
				'홀수 페이지에는 “1”과 같이 표시되고 짝수 페이지에는 표시되지 않는다.',
				'짝수 페이지에는 “2페이지”와 같이 표시되고 홀수 페이지에는 표시되지 않는다.',
				'홀수 페이지에는 “1페이지”와 같이 표시되고 짝수 페이지에는 표시되지 않는다.',
			],
			correct: 3,
			description: (
				<VStack>
					=IIf( [page] Mod 2 = 0, [page] & “페이지”, “”)
					<ol>
						<li>[page] Mod 2 : 현재 페이지 번호를 2로 나눈 나머지를 반환합니다.</li>
						<li>
							IIf(❶=0, [page] & “페이지”, “”) : ❶이 0이면, 즉 현재 페이지가 짝수 페이지면, 현재 페이지 번호에 “페이지”를
							붙여 표시하고 그렇지 않고 홀수 페이지면 아무것도 표시하지 않습니다.
						</li>
					</ol>
					현재 페이지 번호가 2로 짝수 페이지면 2페이지와 같이 현재 페이지에 “페이지”를 붙여 표시하고 현재 페이지 번호가
					1로 홀수 페이지라면 아무것도 표시하지 않습니다.
				</VStack>
			),
		},
		{
			contentId: 28,
			question:
				'다음 중 폼 바닥글에 있는 텍스트 상자의 컨트롤 원본에 <사원> 테이블에서 직급이 ‘부장’인 레코드들의 급여 평균을 구하는 함수식으로 옳은 것은?',
			answer: [
				'=DAVG(“[급여]”, “[사원]”, “[직급]=‘부장’”)',
				'=DAVG(“[사원]”, “[급여]”, “[직급]=‘부장’”)',
				'=AVG(“[급여]”, “[사원]”, “[직급]=‘부장’”)',
				'=AVG(“[사원]”, “[급여]”, “[직급]=‘부장’”)',
			],
			correct: 1,
			description: (
				<VStack>
					=DAVG(“[급여]”, “[사원]”, “[직급]=‘부장’”)의 의미
					<ul>
						<li>급여 : 결과 값을 구할 필드 이름으로, 여기서는 급여의 평균을 구하므로 ‘급여’ 필드를 지정합니다.</li>
						<li>사원 : 작업 대상 레코드가 들어 있는 테이블이나 쿼리의 이름을 지정합니다.</li>
						<li>직급=부장 : 조건으로, ‘직급’이 “부장”인 레코드를 대상으로 합니다.</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 29,
			question:
				'도서를 관리하기 위한 다음 폼은 <도서> 테이블을 레코드 원본으로 사용한다. <도서> 테이블에는 텍스트 형식의 ‘저자코드’ 필드가 있으며, ‘저자명’ 필드는 <저자> 테이블에 존재한다. ‘저자코드’를 표시하는 ‘txt저자코드’ 컨트롤을 이용하여 ‘txt저자명’ 컨트롤에 ‘저자명’을 표시하도록 하기 위한 컨트롤 원본으로 가장 적절한 것은?',
			questionBody: (
				<VStack>
					<RequestBody>
						도서(도서코드, 저자코드, 출판사, 도서명, 가격)
						<br />
						저자(저자코드, 저자명)
					</RequestBody>
					<img src={IMAGES.Img_29} />
				</VStack>
			),
			answer: [
				'=DLookUp(저자명, 저자, “저자코드=‘” & [txt저자코드] & “’”)',
				'=DLookUp(“저자명”, “저자”, “저자코드=‘” & [txt저자코드] & “’”)',
				'=DLookUp(“저자”, “저자명”, “저자코드=‘” & [txt저자코드] & “’”)',
				'=DLookUp(저자, 저자명, “저자코드=‘” & [txt저자코드] & “’”)',
			],
			correct: 2,
			description: (
				<VStack>
					=DLookUp(“저자명”, “저자”, “저자코드=‘” & [txt저자코드] & “’”)의 의미
					<ul>
						<li>도메인 함수에 사용되는 인수들은 각각을 큰따옴표(“ ”)로 묶어야 합니다.</li>
						<li>저자명 : 결과 값을 구할 필드 이름으로, 여기서는 저자명을 표시하므로 ‘저자명’ 필드를 지정합니다.</li>
						<li>저자 : 작업 대상 레코드가 들어 있는 테이블이나 쿼리의 이름을 지정합니다.</li>
						<li>
							저자코드=‘txt저자코드’ : 조건으로, ‘저자코드’가 ‘txt저자코드’ 컨트롤에 입력된 값과 같은 자료를 대상으로
							합니다. 단 ‘txt저자코드’ 컨트롤에 입력된 값이 텍스트일 경우에는 & 연산자를 이용하여 ‘txt 저자코드’
							컨트롤의 앞과 뒤를 작은따옴표(‘’)와 연결해야 합니다.
						</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 30,
			question:
				'다음 중 [학생] 테이블에서 ‘학년’ 필드가 1인 레코드의 개수를 계산하고자 할 때의 수식으로 옳은 것은? (단, [학생] 테이블의 기본 키는 ‘학번’ 필드이다.)',
			answer: [
				'=DLookup(“*”, “학생”, “학년=1”)',
				'=DLookup(*, 학생, 학년=1)',
				'=DCount(학번, 학생, 학년=1)',
				'=DCount(“*”, “학생”, “학년=1”)',
			],
			correct: 4,
			description: (
				<VStack>
					=DCount(“*”, “학생”, “학년=1”)의 의미
					<ul>
						<li>도메인 함수에 사용되는 인수들은 각각을 큰따옴표(“ ”)로 묶어야 합니다.</li>
						<li>* : 결과 값을 구할 필드 이름으로, *는 모든 레코드를 표시하는 만능 문자입니다.</li>
						<li>학생 : 작업 대상 레코드가 들어 있는 테이블이나 쿼리의 이름을 지정합니다.</li>
						<li>학년=1 : 조건으로, 1학년인 레코드를 대상으로 합니다.</li>
					</ul>
				</VStack>
			),
		},
	],
};

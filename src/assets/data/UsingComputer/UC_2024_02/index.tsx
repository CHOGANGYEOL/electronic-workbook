import IMAGES from './images';
import { VStack } from '../../../../components/Common';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const UC_2024_02: Question = {
	questionId: 202402,
	title: '2024대비 필수계산문제20선',
	contents: [
		{
			contentId: 1,
			question: '다음 중 고급 필터의 조건 범위를 [E1:F3] 영역으로 지정한 후 고급 필터를 실행했을 때 결과로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_1} />,
			answer: [
				'코너가 “잡화”이거나, 코너가 “식료품”이거나 판매금액이 판매금액의 평균 이상인 데이터',
				'코너가 “잡화”이거나, 코너가 “식료품”이고 판매금액이 판매금액의 평균 이상인 데이터',
				'코너가 “잡화”이고, 코너가 “식료품”이거나 판매금액이 판매금액의 평균 이상인 데이터',
				'코너가 “잡화”이고, 코너가 “식료품”이고 판매금액이 판매금액의 평균 이상인 데이터',
			],
			correct: 2,
			description: (
				<ul>
					<li>조건을 같은 행에 입력하면 AND 조건, 다른 행에 입력하면 OR 조건으로 연결됩니다.</li>
					<li>코너가 “잡화”이거나, 코너가 “식료품”이고 판매금액이 판매금액의 평균 이상인 데이터가 추출됩니다.</li>
				</ul>
			),
		},
		{
			contentId: 2,
			question:
				'다음 중 상품명이 ‘오디오’ 또는 ‘비디오’이고, 금액이 40000원 이상인 데이터를 추출하기 위한 고급 필터의 조건식으로 올바른 것은?',
			answer: [
				<table key={'UC_2024_02_02-01'}>
					<tr>
						<th>상품명</th>
						<th>금액</th>
					</tr>
					<tr>
						<td>오디오</td>
						<td>{'>'}=40000</td>
					</tr>
					<tr>
						<td>비디오</td>
						<td></td>
					</tr>
				</table>,
				<table key={'UC_2024_02_02-02'}>
					<tr>
						<th>상품명</th>
						<th>금액</th>
					</tr>
					<tr>
						<td>오디오</td>
						<td>{'>'}=40000</td>
					</tr>
					<tr>
						<td>비디오</td>
						<td>{'>'}=40000</td>
					</tr>
				</table>,
				<table key={'UC_2024_02_02-03'}>
					<tr>
						<th>상품명</th>
						<th>상품명</th>
						<th>금액</th>
					</tr>
					<tr>
						<td>오디오</td>
						<td>비디오</td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td>{'>'}=40000</td>
					</tr>
				</table>,
				<table key={'UC_2024_02_02-04'}>
					<tr>
						<th>상품명</th>
						<th>상품명</th>
						<th>금액</th>
					</tr>
					<tr>
						<td>오디오</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td>비디오</td>
						<td>{'>'}=40000</td>
					</tr>
				</table>,
			],
			correct: 2,
			description: (
				<ul>
					<li>AND 조건 : 조건과 조건 사이에 ‘~이고’, ‘~이면서’ 등이 있는 조건으로, 같은 행에 조건을 입력함</li>
					<li>OR 조건 : 조건과 조건 사이에 ‘~ 또는’, ‘~이거나’ 등이 있는 조건으로, 다른 행에 조건을 입력함</li>
				</ul>
			),
		},
		{
			contentId: 3,
			question:
				'아래의 워크시트에서 ‘성명’이 두 글자이고 ‘실적’이 전체 실적의 평균보다 큰 데이터를 필터링하고자 한다. 다음 중 고급 필터 실행을 위한 조건의 입력값으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_3} />,
			answer: [
				<table key={'UC_2024_02_03-01'}>
					<tr>
						<th>성명</th>
						<th>실적</th>
					</tr>
					<tr>
						<td>{'=“=??”'}</td>
						<td>{'=B2>AVERAGE($B$2:$B$10)'}</td>
					</tr>
				</table>,
				<table key={'UC_2024_02_03-02'}>
					<tr>
						<th>성명</th>
						<th>실적평균</th>
					</tr>
					<tr>
						<td>{'=“=??”'}</td>
						<td>{'=B2>AVERAGE($B$2:$B$10)'}</td>
					</tr>
				</table>,
				<table key={'UC_2024_02_03-03'}>
					<tr>
						<th>성명</th>
						<th>실적</th>
					</tr>
					<tr>
						<td>{'=“=??”'}</td>
						<td></td>
					</tr>
					<tr>
						<td>{''}</td>
						<td>{'=B2>AVERAGE($B$2:$B$10)'}</td>
					</tr>
				</table>,
				<table key={'UC_2024_02_03-04'}>
					<tr>
						<th>성명</th>
						<th>실적평균</th>
					</tr>
					<tr>
						<td>{'=“=??”'}</td>
						<td></td>
					</tr>
					<tr>
						<td>{''}</td>
						<td>{'=B2>AVERAGE($B$2:$B$10)'}</td>
					</tr>
				</table>,
			],
			correct: 2,
			description: (
				<ul>
					<li>조건은 AND 조건이므로 조건을 같은 행에 입력해야 합니다.</li>
					<li>
						만능 문자(와일드 카드) *는 모든 자리의 문자를, ?는 한자리의 문자를 대신하는 문자이므로, 두 글자인 데이터를
						찾는 조건은 =“=??”로 입력해야 합니다.
						<br />
						고급 필터의 조건으로 텍스트나 값에 대한 비교 연산자로 등호(=)를 사용할 때는 =“항목” 형식으로 입력하고,
						조건을 지정할 범위의 첫 행에는 원본 데이터의 필드명을 입력해야 합니다(성명).
					</li>
					<li>
						고급 필터의 조건으로 수식을 입력할 경우, 조건을 지정할 범위의 첫 행에는 원본 데이터의 필드명(설명, 실적)과
						다른 필드명을 입력하거나 생략해야 합니다.
					</li>
				</ul>
			),
		},
		{
			contentId: 4,
			question:
				'다음과 같이 [A2:E10] 영역에 ‘판매량’이 40 이상이고, ‘상태’가 “양호”면 배경색을 ‘노랑’으로 설정하는 [조건부 서식]을 지정하려고 한다. 다음 중 [조건부 서식]의 수식 입력란에 입력해야 할 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_4} />,
			answer: [
				'=OR($D2>=40, $C2=“양호”)',
				'=OR(D$2>=40, C$2=“양호”)',
				'=AND($D2>=40, $C2=“양호”)',
				'=AND(D$2>=40, C$2=“양호”)',
			],
			correct: 3,
			description: (
				<ul>
					<li>
						문제에 제시된 모든 조건을 만족하는 행에 서식을 지정해야 하므로 AND 함수를 사용하여 수식을 입력해야 합니다.
					</li>
					<li>
						‘조건부 서식’을 이용하여 조건에 맞는 데이터가 있는 행 전체에 서식을 지정할 때는 수식 입력 시 열 문자 앞에
						$를 붙여야 합니다.
					</li>
				</ul>
			),
		},
		{
			contentId: 5,
			question: '다음 중 아래 그림과 같이 목표값 찾기를 지정했을 때의 설명으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_5} />,
			answer: [
				'만기시 수령액이 2,000,000원이 되려면 월 납입금은 얼마가 되어야 하는가?',
				'만기시 수령액이 2,000,000원이 되려면 적금 이율(연)이 얼마가 되어야 하는가?',
				'불입금이 2,000,000원이 되려면 만기시 수령액은 얼마가 되어야 하는가?',
				'월 납입금이 2,000,000원이 되려면 만기시 수령액은 얼마가 되어야 하는가?',
			],
			correct: 1,
			description: (
				<VStack>
					‘목표값 찾기’ 대화상자의 의미는 다음과 같습니다.
					<ul>
						<li>수식 셀 : 결과 값이 출력되는 셀 주소로, 만기시 수령액[B9]을 의미함</li>
						<li>찾는 값 : 목표로 하는 값으로, 2,000,000원을 의미함</li>
						<li>값을 바꿀 셀 : 목표값을 만들기 위해 변경되는 값이 들어 있는 셀 주소로, 월 납입금[B4]을 의미함</li>
					</ul>
					만기시 수령액이 2,000,000원이 되려면 월 납입금은 얼마가 되어야 하는가?를 의미합니다.
				</VStack>
			),
		},
		{
			contentId: 6,
			question:
				'아래의 워크시트에서 [A1:C1] 영역이 블록으로 지정된 상태에서 채우기 핸들을 끌었을 때 [F1] 셀에 입력되는 값으로 올바른 것은?',
			questionBody: <img src={IMAGES.Img_6_1} />,
			answer: ['1', '-3', '-7', '0'],
			correct: 3,
			description: (
				<VStack>
					<p>
						[A1:C1] 영역이 블록으로 지정된 상태에서 채우기 핸들을 드래그하면, 다음과 같이 첫 셀과 두 번째 셀의 차이인
						4만큼 감소되면서 입력됩니다.
					</p>
					<img src={IMAGES.Img_6_2} />
				</VStack>
			),
		},
		{
			contentId: 7,
			question:
				'셀의 값이 100 이상이면 “▲”, -100 이하이면 “▼”, 그 외는 값이 그대로 표시되는 사용자 지정 표시 형식으로 옳은 것은?',
			questionBody: (
				<RequestBody>
					<ul>
						<li>150 : ▲ </li>
						<li>0:0 </li>
						<li>-50 : -50 </li>
						<li>-122 : ▼</li>
					</ul>
				</RequestBody>
			),
			answer: [
				'[>=100]“▲”;#;[<=-100]“▼”',
				'[>=100]“▲”;0;[<=-100]“▼”',
				'[>=100]“▲”;[<=-100]“▼”;#',
				'[>=100]“▲”;[<=-100]“▼”;0',
			],
			correct: 4,
			description: (
				<ul>
					<li>{'100 이상이면 “▲” : [>=100]“▲”'}</li>
					<li>{'100 이하이면 “▼” : [<=-100]“▼”'}</li>
					<li>
						그 외는 값이 그대로 표시 : 0<br />
						{'표시 형식을 모두 합치면 [>=100]“▲”;[<=-100]“▼”;0입니다.'}
						<br />
						셀의 값이 0일 때 0이 표시되게 하려면 표시 형식을 반드시 0으로 지정해야 합니다.
					</li>
				</ul>
			),
		},
		{
			contentId: 8,
			question: '다음은 셀에 입력된 데이터에 사용자 지정 표시 형식 적용한 것이다. 표시 결과로 옳은 것은?',
			answer: ['0.25 → 0#.#% → 25.%', '0.57 → #.# → 0.6', '90.86 → #,##0.0 → 90.8', '100 → #,###;@“점” → 100점'],
			correct: 1,
			description: (
				<ol>
					<li>0.25 → 0#.#% → 25.%</li>
					<li>0.57 → #.# → .6</li>
					<li>90.86 → #,##0.0 → 90.9</li>
					<li>100 → #,###;@“점” → 100(@는 문자 데이터의 표시 위치를 지정할 때 사용합니다.)</li>
				</ol>
			),
		},
		{
			contentId: 9,
			question: '숫자 -246000을 입력한 후 아래의 표시 형식을 적용했을 때 표시되는 결과로 옳은 것은?',
			questionBody: <RequestBody>#0.0,“천원”;(#0.0,“천원”);0.0;@“님”</RequestBody>,
			answer: ['246.0천원', '246,000', '(-246.0천원)', '(246.0천원)'],
			correct: 4,
			description: (
				<ul>
					<li>
						#0.0,“천원” : 양수일 때 적용되는 서식으로, 천 단위 이하를 생략합니다.
						<br />예{')'} 246000 → 246.0천원
					</li>
					<li>
						(#0.0,“천원”) : 음수일 때 적용되는 서식으로, 음수는 ( )로 묶고 천 단위 이하를 생략합니다.
						<br />예{')'} -246000 → (246.0천원)
					</li>
					<li>
						0.0 : 0일 때 적용되는 서식입니다.
						<br />
						{'예) 0 → 0.0'}
					</li>
				</ul>
			),
		},
		{
			contentId: 10,
			question:
				'다음 그림과 같이 기간과 이율의 변화에 따른 월불입액을 계산하려고 한다. 이때 적용한 데이터 표의 내용으로 옳은 것은? (월불입액 계산 수식은 ‘=PMT(B3/12, B2*12, -B4)’임)',
			questionBody: <img src={IMAGES.Img_10} />,
			answer: [
				'입력값 : [행 입력 셀] : $B$2',
				'입력값 : [열 입력 셀] : $A$2',
				'입력값 : [행 입력 셀] : $B$2 [열 입력 셀] : $B$3',
				'입력값 : [행 입력 셀] : $B$3 [열 입력 셀] : $B$2',
			],
			correct: 3,
			description: (
				<ul>
					<li>변화되는 값은 기간과 이율입니다.</li>
					<li>
						기간의 변경 값이 한 행(7행)에 입력되어 있으므로 ‘데이터 표’ 대화상자의 ‘행 입력 셀’에 기간($B$2)을
						지정합니다.
					</li>
					<li>
						이율의 변경 값이 한 열(C열)에 입력되어 있으므로 ‘데이터 표’ 대화상자의 ‘열 입력 셀’에 이율($B$3)을
						지정합니다.
					</li>
				</ul>
			),
		},
		{
			contentId: 11,
			question:
				'아래 시트에서 [C2:E5] 영역을 선택한 후 배열 수식으로 한 번에 금액을 구하려고 한다. 다음 중 이를 위한 수식으로 옳은 것은? (금액 = 수량 * 단가)',
			questionBody: <img src={IMAGES.Img_11} />,
			answer: ['{=B2*C1:E1}', '{=B2*C1:B5*E5}', '{=B2:B5*C1:E1}', '={B2:B5*C1:E1}'],
			correct: 3,
			description: (
				<ul>
					<li>
						같은 위치에 대응하는 단가와 수량을 곱하여 동시에 결과를 계산하려면 결과가 입력될 [C2:E5] 영역을 블록으로
						지정하고 =B2:B5*C1:E1을 입력한 후 [Ctrl]+[Shift]+[Enter]를 누르면 됩니다.
					</li>
					<li>
						[Ctrl]+[Shift]+[Enter]를 눌러 배열 수식으로 입력하면 수식 앞뒤에 중괄호({'{ }'})가 자동으로 입력되어{' '}
						{'{=B2:B5*C1:E1}'}과 같이 표시됩니다.
					</li>
				</ul>
			),
		},
		{
			contentId: 12,
			question: '다음 조건을 이용하여 사용자 지정 표시 형식을 설정할 경우 옳은 것은?',
			answer: [
				'[빨강][>=200]#,##0.0;[파랑][>=100]#,##0.0;#,##0.0;',
				'[빨강][>=200]#,##0;[파랑][>=100]#,##0;#,##0;',
				'[빨강][>=200]#,##0.0;[파랑][>=100]#,##0.0;#,##0.0',
				'[빨강][>=200]#,##0;[파랑][>=100]#,##0;#,##0',
			],
			correct: 0,
			description:
				'셀의 값이 200 이상이면 ‘빨강’, 200 미만 100 이상이면 ‘파랑’, 100 미만이면 색을 지정하지 않고, 천 단위 구분 기호와 소수 이하 첫째 자리까지 표시할 것\n천 단위 구분 기호와 소수 이하 첫째 자리까지 표시\n→ #,###.0 또는 #,##0.0\n셀의 값이 200 이상이면 ‘빨강’, 200 미만 100 이상이면 ‘파랑’, 100 미만이면 색을 지정하지 않음\n→ [빨강][>=200]#,##0.0:[파랑][>=100]#,##0.0;#,##0.0',
		},
		{
			contentId: 13,
			question: '입력값 12345678에 대한 다음의 입력 마스크 설정에 따른 결과가 옳은 것은?',
			answer: [
				'(000)-000-0000 → (001)-234-5678',
				'#999 → 12345678',
				'(999)-000-0000 → (123)-456-7800',
				'9999-0000 → 1234-5678',
			],
			correct: 0,
			description:
				'같은 위치에 대응하는 단가와 수량을 곱하여 동시에 결과를 계산하려면 결과가 입력될 [C2:E5] 영역을 블록으로 지정하고 =B2:B5*C1:E1을 입력한 후 [Ctrl]+[Shift]+[Enter]를 누르면 됩니다.\n[Ctrl]+[Shift]+[Enter]를 눌러 배열 수식으로 입력하면 수식 앞뒤에 중괄호({ })가 자동으로 입력되어 {=B2:B5*C1:E1}과 같이 표시됩니다.',
		},
		{
			contentId: 14,
			question:
				'다음 두 개의 테이블 사이에서 외래키(Foreign Key)에 해당하는 필드는? (단, 밑줄은 각 테이블의 기본키를 표시함)',
			answer: ['직원 테이블의 사번', '부서 테이블의 팀원수', '부서 테이블의 팀장', '직원 테이블의 부서명'],
			correct: 0,
			description:
				'외래키란 관계를 맺고 있는 테이블 R1, R2에서 테이블 R1이 참조하고 있는 테이블 R2의 기본키와 같은 R1 테이블의 속성을 말합니다.\n지문에 제시된 <직원> 테이블의 기본키는 ‘사번’이고 <부서> 테이블의 기본키는 ‘부서명’입니다.\n외래키는 관계를 맺고 있는 테이블의 기본키를 참조하므로 관계된 테이블의 기본키와 같은 필드명을 찾으면 됩니다.',
		},
		{
			contentId: 15,
			question:
				'다음 중 아래 워크시트의 [B2] 셀에 <보기>의 사용자 지정 표시 형식을 적용했을 때 표시되는 값은?\n<보기>\n[>=1000000]0.0,,“kℓ”;[>=1000]0.0,“l”;0.0“mℓ”',
			answer: ['354600mℓ', '354', '354.6', '0.4kℓ'],
			correct: 0,
			description:
				'[>=1000000]0.0,,“kℓ” : 셀에 입력된 값이 1,000,000 이상일 때 적용되는 서식으로, 백만 단위 이하를 생략합니다.\n예) 25000000 → 25.0kℓ\n[>=1000]0.0,“l” : 셀에 입력된 값이 1,000 이상일 때 적용되는 서식으로, 천 단위 이하를 생략합니다.\n예) 354600 → 354.6l\n0.0“mℓ” : 1,000 미만일 때 적용되는 서식입니다.\n예) 50 → 50.0mℓ',
		},
	],
};

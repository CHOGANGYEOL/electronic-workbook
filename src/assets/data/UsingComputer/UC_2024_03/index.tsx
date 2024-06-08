import IMAGES from './images';
import { VStack } from '../../../../components/Common';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const UC_2024_03: Question = {
	questionId: 202403,
	title: '2024대비 필수코드문제25선',
	contents: [
		{
			contentId: 1,
			question: '다음의 워크시트에서 <보기>의 프로시저를 실행했을 때의 결과로 옳은 것은?',
			questionBody: (
				<VStack $gap="1.2rem">
					<img src={IMAGES.Img_1} />
					<RequestBody>
						Sub B3선택( ) <br />
						&nbsp;&nbsp;Range(“B3”).CurrentRegion.Select <br />
						End Sub
					</RequestBody>
				</VStack>
			),
			answer: ['[B3] 셀이 선택된다.', '[A1:B3] 셀이 선택된다.', '[A1:C3] 셀이 선택된다.', '[A1:C7] 셀이 선택된다.'],
			correct: 4,
			description: (
				<VStack>
					<RequestBody>
						Sub B3선택( )<br />
						&nbsp;&nbsp;❶ Range(“B3”).CurrentRegion.Select
						<br />
						End Sub
					</RequestBody>
					<ol>
						<li>
							[B3] 셀이 포함된 데이터 범위를 모두 선택합니다.
							<ul>
								<li>Range : 워크시트의 셀이나 셀 범위</li>
								<li>CurrentRegion : 데이터가 있는 인접 영역의 범위 </li>
								<li>Select : 선택</li>
							</ul>
						</li>
					</ol>
					∴ [B3] 셀을 기준으로 데이터가 입력된 셀들이 서로 인접하게 연결되어 있으므로 이 셀들을 모두 포 함하는 영역인
					[A1:C7] 영역이 모두 선택됩니다
				</VStack>
			),
		},
		{
			contentId: 2,
			question:
				'다음은 [C3] 셀부터 [F3] 셀의 평균을 [G3] 셀에, 최대값을 [H3] 셀에 계산한 후 [G3:H3] 영역을 블록으로 지정하고 채우기 핸들을 [G10:H10] 영역까지 드래그하여 계산하는 매크로이다. 다음 중 괄호( ) 안에 해당하는 값으로 틀린 것은?',
			questionBody: (
				<RequestBody>
					Sub 매크로1( )<br />
					&nbsp;&nbsp;Range(&quot;G3&quot;).Select <br />
					&nbsp;&nbsp;Selection.FormulaR1C1 = &quot;( a )&quot;
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Range(&quot;H3&quot;).Select <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Selection.FormulaR1C1 = &quot;( b )&quot; Range(&quot;G3:H3&quot;).Select
					<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Selection.( c ) :( d ), Type:=xlFillDefault <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Range(&quot;G3:H10&quot;).Select
					<br />
					End Sub
				</RequestBody>
			),
			answer: ['b =MAX(RC[-5]:RC[-2])', 'a =AVERAGE(RC[-4]:RC[-1])', 'd =Range(“G3:H10”)', 'c Auto Destination'],
			correct: 4,
			description: (
				<VStack $gap="1.2rem">
					<ul>
						<li>자동 채우기를 실행하는 메서드는 Auto가 아니라 AutoFill입니다.</li>
						<li>문제에 제시된 코드의 의미는 다음과 같습니다.</li>
					</ul>
					<RequestBody>
						<ol>
							Sub 매크로1( )<li>Range(&quot;G3&quot;).Select</li>
							<li>Selection.FormulaR1C1 = &quot;=AVERAGE(RC[-4]:RC[-1])&quot;</li>
							<li>Range(&quot;H3&quot;).Select</li>
							<li>Selection.FormulaR1C1 = &quot;=MAX(RC[-5]:RC[-2])&quot;</li>
							<li>Range(&quot;G3:H3&quot;).Select</li>
							<li>Selection.AutoFill Destination:=Range(“G3:H10”), Type:=xlFillDefault</li>
							<li>Range(&quot;G3:H10&quot;).Select</li>
						</ol>
						End Sub
					</RequestBody>
					<ol>
						<li>[G3] 셀을 선택합니다.</li>
						<li>
							현재 셀에 ‘=AVERAGE(RC[-4]:RC[-1])’, 즉 =AVERAGE(C3:F3)을 입력합니다.
							<ul>
								<li>FormulaR1C1 : R1C1 형식의 수식 입력하기</li>
							</ul>
						</li>
						<li>[H3] 셀을 선택합니다.</li>
						<li>현재 셀에 ‘=MAX(RC[-5]:RC[-2])’, 즉 =MAX(C3:F3)을 입력합니다.</li>
						<li>[G3:H3] 영역을 선택합니다.</li>
						<li>
							현재 셀의 채우기 핸들을 드래그하여 [G3:H10] 영역을 자동 채우기합니다.
							<ul>
								<li>AutoFill : 자동 채우기</li>
							</ul>
						</li>
						<li>[G3:H10] 영역을 선택합니다.</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 3,
			question: '다음과 같은 결과가 나오기 위한 프로그램으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_3_1} />,
			answer: [
				<p key={'UC_2024_03_03'}>
					Cells(1, 1) = 1 <br />
					For K = 2 To 5 <br />
					&nbsp;&nbsp;Cells(K, 1) = Cells(K - 1, 1) + K <br />
					Next
				</p>,
				<p key={'UC_2024_03_03'}>
					Cells(1, 1) = 1 <br />
					For K = 2 To 5 <br />
					&nbsp;&nbsp;Cells(1, K) = Cells(1, K - 1) + K <br />
					Next
				</p>,
				<p key={'UC_2024_03_03'}>
					Cells(1, 1) = 1 <br />
					For K = 2 To 5 <br />
					&nbsp;&nbsp;Cells(K, 1) = Cells(K - 1, 1) + 2 <br />
					Next
				</p>,
				<p key={'UC_2024_03_03'}>
					Cells(1, 1) = 1 <br />
					For K = 2 To 5 <br />
					&nbsp;&nbsp;Cells(1, K) = Cells(1, K - 1) + 2 <br />
					Next
				</p>,
			],
			correct: 2,
			description: (
				<VStack>
					<RequestBody>
						<ol>
							<li>Cells(1, 1) = 1</li>
							<li>For K = 2 To 5</li>
							<li>Cells(1, K) = Cells(1, K - 1) + K </li>
							<li>Next</li>
						</ol>
					</RequestBody>
					<ol>
						<li>1행 1열, 즉 [A1] 셀에 1을 입력합니다.</li>
						<li>K가 2에서 5가 될 때까지 1씩 증가시키면서 매번 ➌번 문장을 수행합니다. </li>
						<li>1행 ‘K-1’열에 입력된 값에 K를 더해 1행 K열에 저장합니다.</li>
						<li>반복문의 끝으로, 반복문의 시작인 ➋번으로 이동합니다.</li>
					</ol>
					<p>For ~ Next문(➋~➍)의 실행에 따른 변수의 변화를 보면 다음과 같습니다.</p>
					<table>
						<tr>
							<th>실행횟수</th>
							<th>K</th>
							<th>Cells(1, K-1) + K</th>
							<th>Cells(1, K)</th>
						</tr>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>1행1열(A1) + 2</td>
							<td>1행2열(B1) → 3</td>
						</tr>
						<tr>
							<td>2</td>
							<td>3</td>
							<td>1행2열(B1) + 3</td>
							<td>1행3열(C1) → 6</td>
						</tr>
						<tr>
							<td>3</td>
							<td>4</td>
							<td>1행3열(C1) + 4</td>
							<td>1행4열(D1) → 10</td>
						</tr>
						<tr>
							<td>4</td>
							<td>5</td>
							<td>1행4열(D1) + 5</td>
							<td>1행5열(E1) → 15</td>
						</tr>
						<tr>
							<td>5</td>
							<td>6</td>
							<td></td>
							<td></td>
						</tr>
					</table>
					<p>※ ➊번 실행으로 인해 [A1] 셀에는 1이 입력되어 있습니다.</p>
					<p>
						※ Cells(1, K)의 의미는 K가 1일 때는 1행 1열, K가 2일 때는 1행 2열, K가 3일 때는 1행 3열을 의 미합니다. 1행
						1열은 A1, 1행 2열은 B1, 1행 3열은 C1이 됩니다.{' '}
					</p>
					<p>※ 나머지 보기를 실행하면 다음 그림과 같이 표시됩니다.</p>
					<ol>
						<li>
							<img src={IMAGES.Img_3_2} />
						</li>
						<li value={3}>
							<img src={IMAGES.Img_3_3} />
						</li>
						<li>
							<img src={IMAGES.Img_3_4} />
						</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 4,
			question: '다음과 같은 이벤트를 실행시켰을 때 나타나는 결과로 옳은 것은?',
			questionBody: (
				<RequestBody>
					Private Sub Worksheet_Activate( ) <br />
					&nbsp;&nbsp;Range(“A1”).Select
					<br />
					&nbsp;&nbsp;Selection.Sort Key1:=Range(“A2”), _ <br />
					&nbsp;&nbsp;Order1:=xlAscending, Header:=xlGuess, _ <br />
					&nbsp;&nbsp;OrderCustom:=1, MatchCase:=False, _ <br />
					&nbsp;&nbsp;Orientation:=xlTopToBottom <br />
					End Sub
				</RequestBody>
			),
			answer: [
				'워크시트가 활성화될 때 [A2] 셀을 기준으로 오름차순 정렬한다.',
				'이벤트가 실행된 후에는 [A2] 셀이 선택되어 있다.',
				'활성화 셀이 바뀔 때마다 [A1] 셀을 기준으로 내림차순 정렬한다.',
				'행을 기준으로 정렬한다.',
			],
			correct: 1,
			description: (
				<VStack $gap="1.2rem">
					<RequestBody>
						<ol>
							<li>Private Sub Worksheet_Activate( )</li>
							<li>Range(“A1”).Select</li>
							<li>Selection.Sort Key1:=Range(“A2”), _</li>
						</ol>
						Order1:=xlAscending, Header:=xlGuess, _<br />
						OrderCustom:=1, MatchCase:=False, _<br />
						Orientation:=xlTopToBottom
						<br />
						End Sub
					</RequestBody>
					<ol>
						<li>워크시트가 활성화될 때 실행되는 프로시저입니다. </li>
						<li>
							[A1] 셀을 선택합니다.
							<br />※ [A1] 셀을 선택한 상태에서 정렬을 실행하면 [A1] 셀과 연결된 데이터 목록이 자동으로 선택됩니다.{' '}
						</li>
						<li>
							[A2] 셀을 기준으로 오름차순 정렬을 수행합니다.
							<ul>
								<li>Key1 : 1차 정렬 기준</li>
								<li>Order1 : =xlAscending(1차 정렬 기준은 오름차순)</li>
								<li>Orientation:=xlTopToBottom : 위쪽에서 아래쪽, 즉 열을 기준으로 정렬함</li>
							</ul>
						</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 5,
			question: '다음 중 1부터 10까지의 합을 구하는 VBA 모듈로 옳지 않은 것은?',
			answer: [
				<RequestBody key={'UC_2024_03_05'}>
					no = 0<br />
					sum = 0<br />
					Do While no {'<'}= 10
					<br />
					&nbsp;&nbsp;sum = sum + no
					<br />
					&nbsp;&nbsp;no = no + 1<br />
					Loop
					<br />
					MsgBox sum
				</RequestBody>,
				<RequestBody key={'UC_2024_03_05'}>
					no = 0<br />
					sum = 0<br />
					Do
					<br />
					&nbsp;&nbsp;sum = sum + no
					<br />
					&nbsp;&nbsp;no = no + 1<br />
					Loop While no {'<'}= 10
					<br />
					MsgBox sum
				</RequestBody>,
				<RequestBody key={'UC_2024_03_05'}>
					no = 0<br />
					sum = 0<br />
					Do While no {'<'} 10
					<br />
					&nbsp;&nbsp;sum = sum + no
					<br />
					&nbsp;&nbsp;no = no + 1<br />
					Loop
					<br />
					MsgBox sum
				</RequestBody>,
				<RequestBody key={'UC_2024_03_05'}>
					no = 0<br />
					For no = 1 To 10
					<br />
					&nbsp;&nbsp;sum = sum + no
					<br />
					Next
					<br />
					MsgBox sum
				</RequestBody>,
			],
			correct: 3,
		},
		{
			contentId: 6,
			question:
				'다음 중 <그림>과 같이 데이터가 입력된 워크시트에서 아래의 ‘테스트’ VBA 코드를 실행했을 때 표시되는 메시지 박스로 옳은 것은?',
			questionBody: (
				<VStack $gap="1.2rem">
					<RequestBody>
						Sub 테스트( )<br />
						&nbsp;&nbsp;Dim arg As Range
						<br />
						&nbsp;&nbsp;Set arg = Range(“A1”).CurrentRegion.Cells <br />
						&nbsp;&nbsp;MsgBox arg.Address & “입니다”, 48, “주소는”
						<br />
						End Sub
					</RequestBody>
					<p>{'<그림>'}</p>
					<img src={IMAGES.Img_6_1} />
				</VStack>
			),
			answer: [
				<img src={IMAGES.Img_6_2} key={'UC_2024_03_06'} />,
				<img src={IMAGES.Img_6_3} key={'UC_2024_03_06'} />,
				<img src={IMAGES.Img_6_4} key={'UC_2024_03_06'} />,
				<img src={IMAGES.Img_6_5} key={'UC_2024_03_06'} />,
			],
			correct: 2,
			description: (
				<ul>
					<li>
						MsgBox는 MsgBox(메시지 내용, 버튼 종류+아이콘, 제목 표시줄에 표시될 글자) 형식으로 사용됩니다.
						<ul>
							<li>
								버튼 종류 : 생략하면 {'<확인>'} 단추만 표시되고, 1이면 {'<확인>'}과 {'<취소>'} 단추가 표시됨
							</li>
							<li>
								아이콘 : 48은 ‘경고(
								<img src={IMAGES.Img_6_6} width={'16'} />
								)’ 아이콘이, 64는 ‘정보(
								<img src={IMAGES.Img_6_7} width={'16'} />
								)’ 아이콘이 표시됨
							</li>
						</ul>
					</li>
					<li>
						나머지 보기로 제시된 대화상자를 표시하기 위한 코드는 다음과 같습니다.
						<ol>
							<li>MsgBox arg.Address & “입니다”, 1 + 48, “주소는”</li>
							<li value={3}>MsgBox arg.Address & “입니다”, 1 + 64, “주소는”</li>
							<li>MsgBox arg.Address & “입니다”, 64, “주소는”</li>
						</ol>
					</li>
				</ul>
			),
		},
		{
			contentId: 7,
			question:
				'아래 워크시트는 [A1] 셀에서 [매크로 기록]을 클릭하고 작업을 수행한 과정을 VBA의 코드 창에서 확인한 결과이다. 다음 중 이에 대한 설명으로 옳지 않은 것은?',
			questionBody: (
				<VStack $gap="1.2rem">
					<img src={IMAGES.Img_7_1} alt="" />
					<RequestBody>
						Sub 매크로2( )<br />
						&apos; 매크로2 매크로
						<br />
						&apos;
						<br />
						&nbsp;&nbsp;ActiveCell.Offset(0, 1).Range(“A1”).Select <br />
						&nbsp;&nbsp;ActiveCell.FormulaR1C1 = “성적현황” <br />
						&nbsp;&nbsp;ActiveCell.Offset(1, -1).Range(“A1”).Select <br />
						&nbsp;&nbsp;ActiveCell.FormulaR1C1 = “학번” <br />
						&nbsp;&nbsp;ActiveCell.Offset(0, 1).Range(“A1”).Select <br />
						&nbsp;&nbsp;ActiveCell.FormulaR1C1 = “학과” <br />
						&nbsp;&nbsp;Range(&quot;C2&quot;).Select <br />
						&nbsp;&nbsp;ActiveCell.FormulaR1C1 = “이름” <br />
						&nbsp;&nbsp;Range(&quot;A3&quot;).Select
						<br />
						End Sub
					</RequestBody>
				</VStack>
			),
			answer: [
				'매크로의 이름은 ‘매크로2’이다.',
				'‘성적현황’, ‘학번’, ‘학과’는 상대 참조로 기록되었다.',
				'[A3] 셀을 클릭하고 매크로를 실행한 후의 셀 포인터 위치는 [A5] 셀이다.',
				'[B3] 셀을 클릭하고 매크로를 실행한 후의 [C3] 셀의 값은 ‘성적현황’이다.',
			],
			correct: 3,
			description: (
				<VStack>
					<ul>
						<li>
							매크로의 가장 마지막에 있는 ‘Range(“A3”).Select’로 인해 현재 셀 포인터의 위치에 상관없이 매크 로를
							실행하면 셀 포인터는 [A3] 셀에 놓입니다.
						</li>
						<li>
							[B3] 셀을 클릭하고 매크로를 실행하면 다음과 같이 실행됩니다.
							<br />
							<img src={IMAGES.Img_7_2} />
						</li>
						<li>매크로 코드의 의미는 다음과 같습니다.</li>
					</ul>
					<RequestBody>
						<ol>
							Sub 매크로2( )<li>&apos; 매크로2 매크로 &apos;</li>
							<li>ActiveCell.Offset(0, 1).Range(“A1”).Select </li>
							<li>ActiveCell.FormulaR1C1 = “성적현황”</li>
							<li>ActiveCell.Offset(1, -1).Range(“A1”).Select </li>
							<li>ActiveCell.FormulaR1C1 = “학번”</li>
							<li>ActiveCell.Offset(0, 1).Range(“A1”).Select </li>
							<li>ActiveCell.FormulaR1C1 = “학과”</li>
							<li>Range(&quot;C2&quot;).Select</li>
							<li>ActiveCell.FormulaR1C1 = “이름”</li>
							<li>Range(“A3”).Select </li>
						</ol>
						End Sub
					</RequestBody>
					<ol>
						<li>
							작은따옴표(&apos;)가 있는 문장은 프로그램을 설명하는 주석문으로, 실행되지 않습니다. 매크로 이름이
							‘매크로2’임을 알 수 있습니다.
						</li>
						<li>
							활성화된 셀에서 아래쪽으로 0칸, 오른쪽으로 1칸 이동한 후 그 셀을 기준으로 첫 번째 열(A), 첫 번째 행(1)을
							선택합니다.
							<ul>
								<li>Offset : 지정된 범위에서 떨어진 범위</li>
								<li>
									Range(“A1”) : [A1] 셀을 의미하는 것이 아니라 첫 번째 열(A), 첫 번째 행(1)을 의미합니다.
									‘Range(“A2”)’로 지정하면 첫 번째 열(A), 두 번째 행(2)을 의미합니다.{' '}
								</li>
								<li>※ ‘ActiveCell.Offset(0, 1).Select’로 작성해도 결과는 동일합니다.</li>
							</ul>
						</li>
						<li>활성화된 셀에 성적현황을 입력합니다.</li>
						<li>
							활성화된 셀에서 아래쪽으로 1칸, 왼쪽으로 1칸 이동한 후 그 셀을 기준으로 첫 번째 열(A), 첫 번 째 행(1)을
							선택합니다.
						</li>
						<li>활성화된 셀에 학번을 입력합니다.</li>
						<li>
							활성화된 셀에서 아래쪽으로 0칸, 오른쪽으로 1칸 이동한 후 그 셀을 기준으로 첫 번째 열(A), 첫 번째 행(1)을
							선택합니다.
						</li>
						<li>활성화된 셀에 학과를 입력합니다. </li>
						<li>[C2] 셀을 선택합니다.</li>
						<li>활성화된 셀에 이름을 입력합니다. </li>
						<li>[A3] 셀을 선택합니다.</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 8,
			question: '다음과 같은 이벤트를 실행시켰을 때 나타나는 결과로 옳은 것은?',
			questionBody: (
				<RequestBody>
					Private Sub
					<br />
					&nbs;&nbs;Range(“B2:C3”).Select <br />
					&nbs;&nbs;Selection.Delete Shift:=xlToLeft
					<br />
					End Sub
				</RequestBody>
			),
			answer: [
				'[B2:C3] 영역을 셀의 왼쪽에 복사한다.',
				'[B2:C3] 영역을 삭제한 후 왼쪽에 있는 셀을 오른쪽으로 이동한다.',
				'[B2:C3] 영역을 삭제한 후 오른쪽에 있는 셀을 왼쪽으로 이동한다.',
				'[B2:C3] 영역을 셀의 오른쪽에 복사한다.',
			],
			correct: 3,
			description: (
				<VStack>
					Private Sub
					<br />
					&nbs;&nbs;Range(“B2:C3”).Select // [B2:C3] 영역을 선택합니다.
					<br />
					&nbs;&nbs;Selection.Delete Shift:=xlToLeft // 선택한 영역을 삭제한 후 오른쪽에 있는 셀을 왼쪽으로 이동합니다.
					<br />
					End Sub
				</VStack>
			),
		},
		{
			contentId: 9,
			question: '다음 중 주어진 <Customer> 테이블을 참조하여 아래의 SQL문을 실행한 결과로 옳은 것은?',
			questionBody: (
				<VStack $gap="1.2rem">
					<RequestBody>
						SELECT Count(*) <br />
						FROM (SELECT Distinct City From Customer);
					</RequestBody>
					<img src={IMAGES.Img_9} alt="" />
				</VStack>
			),
			answer: ['3', '5', '7', '9'],
			correct: 2,
			description: (
				<VStack $gap="1.2rem">
					하위 질의의 결과가 기본 질의의 조건으로 사용되므로 다음과 같은 순서로 질의문을 실행하면 됩니다.
					<ol>
						<li>
							SELECT Distinct City From Customer : {'<Customer>'} 테이블에서 ‘City’ 필드를 추출하되, 중복되는 필드는 한
							번만 표시합니다.
							<br />
							<table>
								<tr>
									<th>City</th>
								</tr>
								<tr>
									<td>부산</td>
								</tr>
								<tr>
									<td>서울</td>
								</tr>
								<tr>
									<td>대전</td>
								</tr>
								<tr>
									<td>광주</td>
								</tr>
								<tr>
									<td>인천</td>
								</tr>
							</table>
						</li>
						<li>
							SELECT Count(*) FROM ❶ : ❶에서 추출된 결과를 대상으로 레코드의 개수(Count)를 산출합니다. 결과는 5입니다.
						</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 10,
			question: '다음 중 아래의 VBA 코드에 대한 설명으로 옳지 않은 것은?',
			questionBody: (
				<RequestBody>
					Private Sub Worksheet_Change(ByVal Target As Range) <br />
					&nbsp;&nbsp;If Target.Address = Range(“A1”).Address Then <br />
					&nbsp;&nbsp;&nbsp;&nbsp;Target.Font.ColorIndex = 5 <br />
					&nbsp;&nbsp;&nbsp;&nbsp;MsgBox Range(“A1”).Value & “입니다.“ <br />
					&nbsp;&nbsp;End If <br />
					End Sub
				</RequestBody>
			),
			answer: [
				'[A1] 셀이 변경되면 [A1] 셀의 글꼴 색이 ColorIndex가 5인 색으로 변경된다.',
				'[A1] 셀을 선택하면 [A1] 셀의 값이 메시지 박스에 표시된다.',
				'VBA 코드가 작성된 워크시트에서만 동작한다.',
				'일반 모듈이 아닌 워크시트 이벤트를 사용한 코드이다.',
			],
			correct: 2,
			description: (
				<VStack $gap="1.2rem">
					<RequestBody>
						<ol>
							<li>Private Sub Worksheet_Change(ByVal Target As Range)</li>
							<li>If Target.Address = Range(“A1”).Address Then</li>
							<li>Target.Font.ColorIndex = 5</li>
							<li>MsgBox Range(“A1”).Value & “입니다.“</li>
						</ol>
						End If
						<br />
						End Sub
					</RequestBody>

					<ol>
						<li>
							‘Worksheet_Change’ 프로시저에 입력된 코드는 셀의 값이 변경되거나 셀이 이동하는 등 워크시트에 변화가 있을
							때 작동합니다.
						</li>
						<li>현재 작업하고 있는 셀의 주소가 [A1] 셀이면 ❸~❹번을 수행합니다.</li>
						<li>현재 작업하고 있는 셀의 글꼴 색을 파랑색(5)으로 지정합니다.</li>
						<li>[A1] 셀의 값과 입니다.를 연결한 메시지가 표시된 메시지 박스를 표시합니다.</li>
					</ol>
				</VStack>
			),
		},
		{
			contentId: 11,
			question: '[미완성]다음 중 아래의 VBA 코드를 실행한 결과 메시지 상자에 표시되는 내용은 무엇인가?',
			answer: ['1 대한상공회의소', '2 상공', '3 대한활용회의소', '4 활용'],
			correct: 0,
			description:
				'[해설]\n❶ SampleString 변수를 선언합니다.\n❷ SampleString 변수에 “대한상공회의소”를 저장합니다.\n❸ SampleString 변수에 있는 텍스트 “대한상공회의소”의 세 번째 문자부터 2글자(상공) 대신 “활용”을 저장합니다(대한활용회의소).\n❹ SampleString 변수에 있는 내용을 메시지 박스(MsgBox)로 표시합니다.\nPrivate Sub Form_Load( )\n❶ Dim SampleString\n❷ SampleString = “대한상공회의소”\n❸ Mid(SampleString, 3, 2) = “활용”\n❹ MsgBox (SampleString)\nEnd Sub',
		},
		{
			contentId: 12,
			question:
				'‘cmd조회’ 명령 단추를 클릭하면 ‘항공사코드’ 필드의 값과 ‘cmb조회’ 컨트롤에 입력된 값이 같은 레코드만 표시되도록 이벤트 프로시저를 작성할 경우 ᄀ에 들어갈 알맞은 코드는?',
			answer: ['1 Me.FilterOn', '2 Me.FilterOn = True', '3 Me.FilterOn = False', '4 Me.FilterOn = OK'],
			correct: 0,
			description:
				'[해설]\n• FilterOn 속성은 Filter에 정의된 조건을 폼이나 보고서에 적용할지를 지정합니다.\n• FilterOn 속성이 True이면 Filter 속성을 적용하고, False이면 Filter 속성을 해제합니다.',
		},
		{
			contentId: 13,
			question: '다음 중 아래 시트에서 <변경 전> 내용을 <변경 후>와 같이 변경하는 수식으로 옳은 것은?',
			answer: [
				'=SUBSTITUTE(A2, “136”, “36”, 1)',
				'=SUBSTITUTE(A2, “136”, “36”, 2)',
				'=SUBSTITUTE(A2, “36”, “136”, 1)',
				'=SUBSTITUTE(A2, “36”, “136”, 2)',
			],
			correct: 0,
		},
		{
			contentId: 14,
			question: '다음 중 VBA 코드를 실행한 결과로 옳지 않은 것은?',
			answer: [
				'1 MsgBox는 변수의 값을 표시한다.',
				'2 Range(“A1”)은 A1 셀을 선택한다.',
				'3 Dim은 변수를 선언한다.',
				'4 ActiveCell은 활성화된 셀을 의미한다.',
			],
			correct: 0,
			description:
				'[해설]\nVBA 코드에서 MsgBox는 메시지 박스를 표시하고, Dim은 변수를 선언합니다. Range(“A1”)은 A1 셀을 선택하는 코드입니다. ActiveCell은 현재 활성화된 셀을 의미합니다.',
		},
		{
			contentId: 15,
			question: '다음 중 아래 시트에서 B2 셀의 값을 변경하는 수식으로 옳은 것은?',
			answer: [
				'=IF(A2>10, “크다”, “작다”)',
				'=IF(A2>10, “작다”, “크다”)',
				'=IF(A2<10, “크다”, “작다”)',
				'=IF(A2<10, “작다”, “크다”)',
			],
			correct: 0,
		},
		{
			contentId: 16,
			question: '다음 중 주어진 SQL문을 실행한 결과로 옳은 것은?',
			answer: [
				"1 SELECT * FROM Customer WHERE City = '서울';",
				"2 SELECT * FROM Customer WHERE City = '부산';",
				"3 SELECT * FROM Customer WHERE City = '인천';",
				"4 SELECT * FROM Customer WHERE City = '광주';",
			],
			correct: 0,
			description:
				"[해설]\nSQL문의 WHERE 절을 사용하여 특정 도시를 기준으로 데이터를 조회할 수 있습니다. 예를 들어, '서울'을 조회하려면 'SELECT * FROM Customer WHERE City = '서울';'을 사용합니다.",
		},
		{
			contentId: 17,
			question: '다음 중 매크로 기록 기능을 사용하여 생성된 VBA 코드로 옳지 않은 것은?',
			answer: [
				'1 매크로는 반복 작업을 자동화한다.',
				'2 매크로 코드에서 ActiveCell은 항상 A1 셀을 의미한다.',
				'3 매크로 기록은 작업 과정을 VBA 코드로 저장한다.',
				'4 매크로 코드는 VBA 편집기에서 수정할 수 있다.',
			],
			correct: 0,
			description:
				'[해설]\n매크로는 반복 작업을 자동화하는 데 사용됩니다. 매크로 기록 기능을 사용하면 작업 과정을 VBA 코드로 저장할 수 있으며, 이 코드는 VBA 편집기에서 수정할 수 있습니다. ActiveCell은 현재 활성화된 셀을 의미하며, 항상 A1 셀을 의미하지는 않습니다.',
		},
		{
			contentId: 18,
			question: '다음 중 아래 SQL문을 실행한 결과로 올바른 것은?',
			answer: [
				"1 SELECT Name FROM Customer WHERE City = '서울';",
				"2 SELECT Name FROM Customer WHERE City = '부산';",
				"3 SELECT Name FROM Customer WHERE City = '대전';",
				"4 SELECT Name FROM Customer WHERE City = '광주';",
			],
			correct: 0,
			description:
				"[해설]\nSQL문의 SELECT 절을 사용하여 특정 도시의 고객 이름을 조회할 수 있습니다. 예를 들어, '서울'에 거주하는 고객의 이름을 조회하려면 'SELECT Name FROM Customer WHERE City = '서울';'을 사용합니다.",
		},
		{
			contentId: 19,
			question:
				'<회원> 테이블의 내용이 다음과 같을 때 SQL문을 실행한 결과 표시되는 레코드의 수는?\nSELECT DISTINCT 이름\nFROM 회원\nWHERE 이름 Like “이*” OR 이름 = “강감찬”;',
			answer: ['13', '24', '35', '47'],
			correct: 0,
			description:
				'[해설]\n• SELECT DISTINCT 이름 : ‘이름’ 필드를 검색하되 중복된 이름은 한 번만 표시합니다.\n• FROM 회원 : <회원> 테이블에서 검색합니다.\n• WHERE 이름 Like “이*” OR 이름=“강감찬” : 이름이 “이”로 시작하거나 “강감찬”인 레코드만을 대상으로 검색합니다.\n※ 질의문의 수행 결과 표시되는 레코드의 개수는 3개입니다.',
		},
		{
			contentId: 20,
			question:
				'다음 중 학생(학번, 이름, 학과) 테이블에 학과가 ‘경영학과’, 학번이 300, 이름이 ‘김상공’인 학생의 정보를 추가하는 SQL 문으로 올바른 것은?',
			answer: [
				'1 Insert Into 학생(학번, 이름, 학과) Values(300, ‘김상공’, ‘경영학과’);',
				'2 Insert 학생(학번, 이름, 학과) Values(300, ‘김상공’, ‘경영학과’);',
				'3 Insert Into 학생(학번, 이름, 학과) Values(300, 김상공, 경영학과);',
				'4 Insert 학생(학번, 이름, 학과) Values(300, 김상공, 경영학과);',
			],
			correct: 0,
			description:
				'[해설]\n• <학생> 테이블에 학번, 이름, 학과를 삽입하므로 Insert Into 학생(학번, 이름, 학과)입니다.\n• 삽입되는 속성과 값이 학번은 300, 이름은 ‘김상공’, 학과는 ‘경영학과’이므로 Value(300, ‘김상공’, ‘경영학과’)입니다.\n※ ‘김상공’이나 ‘경영학과’와 같이 텍스트 형식을 입력할 때는 작은따옴표(‘’)나 큰따옴표(“”)로 묶어야 합니다. 그렇지 않으면 해당 값을 필드로 인식하여 매개 변수 대화상자를 표시합니다.',
		},
		{
			contentId: 21,
			question: '다음의 <거래처>와 <매출> 테이블을 조인하여 질의를 수행한 결과에 대한 설명으로 가장 옳지 않은 것은?',
			answer: [
				'1 조회 결과의 필드 수는 5개이다.',
				'2 조회 결과의 레코드 수는 4개이다.',
				'3 거래처번호 3에 대한 매출 정보는 나타나지 않는다.',
				'4 매출번호 4에 대한 매출 정보는 나타나지 않는다.',
			],
			correct: 0,
			description:
				'[해설]\n내부 조인(Inner Join)은 조인된 필드(거래처번호와 매출거래처)가 일치하는 행만 추출되는 것으로, 추출된 결과는 다음과 같습니다.\n※ 조회 결과로 표시되는 레코드 수는 3개입니다.',
		},
		{
			contentId: 22,
			question: '<상품>과 <주문> 테이블을 대상으로 SQL문을 실행했을 때 결과로 표시되는 상품번호로 옳은 것은?\n<SQL문>',
			answer: ['1 1, 2', '2 2, 3, 4', '3 1, 2, 3, 4, 5', '4 1, 3, 5'],
			correct: 0,
			description:
				'[해설]\n하위 질의의 결과가 기본 질의의 조건으로 사용되므로 다음과 같은 순서로 질의문을 수행하면 됩니다.\n❶ Select 상품번호 From 주문 Where 거래처번호 Between 30 And 50 : <주문> 테이블에서 ‘상품 번호’ 필드를 추출하되, 거래처번호가 30에서 50 사이인 레코드만을 대상으로 합니다.\n❷ Select 상품번호 From 상품 Where 상품번호 In ( ❶ ) : <상품> 테이블에서 상품번호가 ❶에서 추출한 상품번호와 같은 레코드의 상품번호를 표시합니다.\n※ 질의문의 수행 결과 표시되는 ‘상품번호’는 2, 3, 4입니다.',
		},
		{
			contentId: 23,
			question:
				'다음 중 <사원> 테이블에서 ‘나이’ 필드의 값이 30 이상 35 이하인 사원의 ‘부서’와 ‘이름’ 필드를 검색하는 SQL 문으로 틀린 것은?',
			answer: [
				'1 Select 부서, 이름 From 사원 Where 나이 Between 30 And 35;',
				'2 Select 부서, 이름 From 사원 Where 나이 In(30, 31, 32, 33, 34, 35);',
				'3 Select 부서, 이름 From 사원 Where 나이 >= 30 And <=35;',
				'4 Select 부서, 이름 From 사원 Where 사원.나이 >= 30 And 사원.나이 <=35;',
			],
			correct: 0,
			description:
				'[해설]\nAnd나 Or 연산자를 이용해 한 개의 필드에 여러 개의 조건을 지정할 때는 4번과 같이 조건 각각에 필드명을 지정해야 합니다.',
		},
		{
			contentId: 24,
			question:
				'다음 중 현재 폼에서 ‘cmd숨기기’ 단추를 클릭하는 경우, DateDue 컨트롤이 표시되지 않도록 하기 위한 이벤트 프로시저로 옳은 것은?',
			answer: [
				'1 Private Sub cmd숨기기_Click( )\nMe.[DateDue]!Visible = False\nEnd Sub',
				'2 Private Sub cmd숨기기_DblClick( )\nMe!DateDue.Visible = True\nEnd Sub',
				'3 Private Sub cmd숨기기_Click( )\nMe![DateDue].Visible = False\nEnd Sub',
				'4 Private Sub cmd숨기기_DblClick( )\nMe.DateDue!Visible = True\nEnd Sub',
			],
			correct: 0,
			description:
				'[해설]\n• 컨트롤을 마우스로 클릭했을 때 발생하는 이벤트는 Click 이벤트입니다. 그러므로 ‘cmd숨기기’ 단추를 클릭했을 때 발생하는 이벤트 프로시저는 ‘Private Sub cmd숨기기_Click( )’으로 시작해야 합니다.\n• 폼, 보고서 컨트롤 등의 표시 여부를 결정하는 속성은 Visible이며, ‘Visible = True’와 같이 Visible 속성을 ‘True’로 설정하면 표시하고, ‘False’로 설정하면 표시하지 않습니다.\n• 개체명과 컨트롤명은 느낌표(!)로 구분하고 컨트롤에 속성을 지정할 때는 점(.)으로 연결합니다.',
		},
		{
			contentId: 25,
			question:
				'아래의 프로시저를 이용하여 [A1:C3] 영역에서 내용만 지우려고 한다. 다음 중 괄호 안에 들어갈 코드로 옳은 것은?\nSub Procedure() Range(“A1:C3”).Select Selection.( ) End Sub',
			answer: ['1 DeleteContents', '2 FreeContents', '3 ClearContents', '4 DeactivateContents'],
			correct: 0,
			description:
				'[해설]\nSub Procedure( )\nRange(“A1:C3”).Select [A1:C3] 영역을 선택합니다.\nSelection.ClearContents 선택한 영역에 지정된 내용만 삭제합니다.\nEnd Sub',
		},
	],
};

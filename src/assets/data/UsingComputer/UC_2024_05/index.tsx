import IMAGES from './images';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const UC_2024_05: Question = {
	questionId: 202405,
	title: '2024대비 키워드찾기문제50선',
	contents: [
		{
			contentId: 1,
			question: '다음 중 컴퓨터에서 사용하는 가상 메모리에 관한 설명으로 옳은 것은?',
			answer: [
				'중앙처리장치와 주기억장치 사이에 위치하여 컴퓨터의 처리 속도를 향상시키는 역할을 한다.',
				'보조기억장치의 일부를 주기억장치처럼 사용하는 메모리 사용 기법으로 주기억장치보다 큰 프로그램을 로드하여 실행할 경우에 유용하다.',
				'CPU가 데이터를 처리하는 동안 미리 CPU가 필요로 하는 데이터를 저장해 두는 기억장치이다.',
				'디스크와 같은 보조기억장치의 기억 공간을 가상으로 확장하는 기억장치이다.',
			],
			correct: 2,
		},
		{
			contentId: 2,
			question:
				'통신 기술과 GPS, 그리고 컴퓨터에 저장된 데이터베이스를 이용하여 주변의 위치와 부가 서비스를 제공하는 기술은?',
			answer: ['사물 인터넷(IoT)', '빅 데이터(Big Data)', '위치 기반 서비스(LBS)', '시맨틱 웹(Semantic Web)'],
			correct: 3,
		},
		{
			contentId: 3,
			question: '다음 중 DoS(Denial of Service)에 대한 설명으로 옳은 것은?',
			answer: [
				'네트워크 주변을 지나다니는 패킷을 엿보면서 계정과 패스워드를 알아내는 행위이다.',
				'대량의 데이터를 한 곳의 서버에 집중적으로 전송함으로써, 서버의 정상적인 기능을 방해하는 것이다.',
				'정상적인 기능을 하는 프로그램으로 가장하여 프로그램 내에 숨어 있다가 해당 프로그램이 동작할 때 활성화되어 부작용을 일으키는 것이다.',
				'서비스 기술자나 유지보수 프로그래머들의 액세스 편의를 위해 만든 보안이 제거된 비밀통로이다.',
			],
			correct: 2,
		},
		{
			contentId: 4,
			question: '다음 중 인트라넷(Intranet)에 대한 설명으로 옳은 것은?',
			answer: [
				'여러 대의 컴퓨터를 연결하여 하나의 서버로 사용하는 기술이다.',
				'인터넷 기술을 이용하여 조직 내의 각종 업무를 수행할 수 있도록 만든 네트워크 환경이다.',
				'이동 전화 단말기에서 개인용 컴퓨터의 운영체제와 같은 역할을 하는 소프트웨어이다.',
				'기업체가 협력업체와 고객 간의 정보 공유를 목적으로 구성한 네트워크이다.',
			],
			correct: 2,
		},
		{
			contentId: 5,
			question: '다음 중 인터넷 통신 장비인 게이트웨이(Gateway)의 기본적인 역할에 관한 설명으로 옳은 것은?',
			answer: [
				'네트워크 계층의 연동장치로 경로 설정에 사용된다.',
				'문자로 된 도메인 이름을 숫자로 이루어진 실제 IP 주소로 변환하는데 사용된다.',
				'인터넷 신호를 증폭하며 먼 거리로 정보를 전달할 때 사용된다.',
				'현재 위치한 네트워크에서 다른 네트워크로 연결할 때 사용된다.',
			],
			correct: 4,
		},
		{
			contentId: 6,
			question: '다음 중 컴퓨터에서 중앙처리장치와 입출력장치 사이의 속도 차이로 인한 문제점을 해결해 주는 것은?',
			answer: ['범용 레지스터', '콘솔', '인터럽트', '채널'],
			correct: 4,
		},
		{
			contentId: 7,
			question: '다음 중 한글 Windows 10에서 파일의 검색 기능을 향상시키기 위한 기능은?',
			answer: ['색인', '압축', '복원', '백업'],
			correct: 1,
		},
		{
			contentId: 8,
			question: '다음 중 패치(Patch) 버전 소프트웨어에 관한 설명으로 옳은 것은?',
			answer: [
				'오류 수정이나 성능 향상을 위해 프로그램 일부를 변경해주는 소프트웨어이다.',
				'정식으로 대가를 지불하고 사용하는 소프트웨어이다.',
				'정식 프로그램 출시 전에 테스트용으로 제작되어 일반인에게 공개하는 소프트웨어이다.',
				'홍보용으로 사용 기간이나 기능에 제한을 둔 소프트웨어이다.',
			],
			correct: 1,
		},
		{
			contentId: 9,
			question: '다음 중 전자우편에서 사용하는 POP3 프로토콜에 관한 설명으로 옳은 것은?',
			answer: [
				'사용자가 작성한 이메일을 다른 사람의 계정으로 전송해 주는 역할을 한다.',
				'메일 서버의 이메일을 사용자의 컴퓨터로 가져올 수 있도록 메일 서버에서 제공하는 프로토콜이다.',
				'멀티미디어 전자우편을 주고 받기 위한 인터넷 메일의 표준 프로토콜이다.',
				'웹 브라우저에서 제공하지 않는 멀티미디어 파일을 확인하여 실행시켜주는 프로토콜이다.',
			],
			correct: 2,
		},
		{
			contentId: 10,
			question: '다음 중 프로그램 카운터(PC)에 대한 설명으로 옳은 것은?',
			answer: [
				'명령 레지스터에 있는 명령어를 해독한다.',
				'연산 결과를 일시적으로 저장한다.',
				'다음에 실행할 명령어의 주소를 저장한다.',
				'현재 실행 중인 명령을 기억한다.',
			],
			correct: 3,
		},
		{
			contentId: 11,
			question:
				'다음 중 반도체를 이용한 컴퓨터 보조기억장치로 크기가 작고 충격에 강하며, 소음 발생이 없는 대용량 저장장치는?',
			answer: [
				'HDD(Hard Disk Drive)',
				'DVD(Digital Versatile Disk)',
				'SSD(Solid State Drive)',
				'CD-RW(Compact Disc Rewritable)',
			],
			correct: 3,
		},
		{
			contentId: 12,
			question:
				'다음 중 스마트폰을 모뎀처럼 활용하는 방법으로, 컴퓨터나 노트북 등의 IT 기기를 스마트폰에 연결하여 무선 인터넷을 사용할 수 있게 하는 기능은?',
			answer: ['와이파이(WiFi)', '블루투스(Bluetooth)', '테더링(Tethering)', '와이브로(WiBro)'],
			correct: 3,
		},
		{
			contentId: 13,
			question:
				'다음 중 한글 Windows 10에서 설치된 하드웨어를 확인하거나 하드웨어 설정의 수정 및 제거를 할 수 있는 곳은?',
			answer: ['작업 관리자', '레지스트리 편집기', '장치 관리자', '하드웨어 추가/제거'],
			correct: 3,
		},
		{
			contentId: 14,
			question:
				'다음 중 특정한 목적을 위한 작은 컴퓨터 시스템으로 하드웨어와 소프트웨어가 하나로 조합되어 있고, TV, 냉장고, 밥솥 등의 가전제품에 사용되는 시스템은?',
			answer: ['임베디드 시스템', '듀얼 시스템', '듀플렉스 시스템', '시분할 시스템'],
			correct: 1,
		},
		{
			contentId: 15,
			question:
				'다음 중 하나의 컴퓨터에 여러 개의 중앙처리장치를 설치하여 주기억장치나 주변장치들을 공유하고, 신뢰성과 연산 능력을 향상시키는 시스템을 의미하는 것은?',
			answer: [
				'다중 처리 시스템(Multi-Processing System)',
				'듀플렉스 시스템(Duplex System)',
				'시분할 처리 시스템(Time Sharing System)',
				'다중 프로그래밍 시스템(Multi-Programming System)',
			],
			correct: 1,
		},
		{
			contentId: 16,
			question: '다음 중 네트워크 관련 장비로 라우터(Router)에 관한 설명으로 옳은 것은?',
			answer: [
				'네트워크를 구성할 때 한꺼번에 여러 대의 컴퓨터를 연결할 때 사용되는 장비이다.',
				'인터넷 신호를 증폭하거나 중계하는 역할을 하는 장비이다.',
				'가장 최적의 IP 경로를 설정하여 데이터를 전송하는데 사용되는 장비이다.',
				'다른 네트워크로 데이터를 보내거나 받아들이는 역할을 하는 장비이다.',
			],
			correct: 3,
		},
		{
			contentId: 17,
			question: '다음 중 데이터베이스의 3단계 구조 중 하나로 데이터베이스 전체의 논리적인 구조를 보여주는 스키마는?',
			answer: ['외부 스키마', '개념 스키마', '내부 스키마', '논리 스키마'],
			correct: 2,
		},
		{
			contentId: 18,
			question: '다음 중 외래키 값을 관련된 테이블의 기본키 값과 동일하게 유지해 주는 제약 조건은?',
			answer: ['동시 제어성', '관련성', '참조 무결성', '동일성'],
			correct: 3,
		},
		{
			contentId: 19,
			question: '다음 중 아래 설명에 해당하는 차트 종류는?',
			questionBody: (
				<RequestBody>
					<ul>
						<li>
							항목의 값을 점으로 표시하여 여러 데이터 값들의 관계를 보여주며 주로 과학 데이터의 차트 작성에 사용된다.
						</li>
						<li>가로 축의 값이 일정한 간격이 아닌 경우나 데이터 요소의 수가 많은 경우 사용된다.</li>
						<li>기본적으로 5개의 하위 차트 종류가 제공되며, 3차원 차트로 작성할 수 없다.</li>
					</ul>
				</RequestBody>
			),
			answer: ['분산형 차트', '도넛형 차트', '방사형 차트', '혼합형 차트'],
			correct: 1,
		},
		{
			contentId: 20,
			question:
				'아래의 워크시트에서 ‘경비지출 내역’ 중 3개의 값이 각각 변할 경우 총경비가 어떻게 변하는지를 알아보기 위한 기능으로 적합한 것은?',
			questionBody: <img src={IMAGES.Img_20} />,
			answer: ['목표값 찾기', '데이터 표', '시나리오', '피벗 테이블'],
			correct: 3,
		},
		{
			contentId: 21,
			question:
				'정규화 과정 중 릴레이션에 속한 모든 도메인이 원자값(Atomic Value)만으로 되어 있는 릴레이션은 어떤 정규형의 릴레이션인가?',
			answer: ['제1정규형', 'BCNF 정규형', '제2정규형', '제3정규형'],
			correct: 1,
		},
		{
			contentId: 22,
			question:
				'다음 중 아래 워크시트에서 [B1:B3] 영역의 문자열을 [B4] 셀에 목록으로 표시하여 입력하기 위한 키 조작으로 옳은 것은?',
			answer: ['[Tab]+[↓]', '[Shift]+[↓]', '[Ctrl]+[↓]', '[Alt]+[↓]'],
			correct: 4,
		},
		{
			contentId: 23,
			question: '다음 중 하나의 계열만을 표시할 수 있는 차트는?',
			answer: ['세로 막대형', '원형', '방사형', '영역형'],
			correct: 2,
		},
		{
			contentId: 24,
			question:
				'아래 워크시트에서 [B13:D14] 영역에는 직책별 부서별 목표액의 합계를 함수를 이용하여 계산하였다. 함수가 아닌 분석 도구를 이용하여 계산할 경우 가장 알맞은 도구는?',
			questionBody: <img src={IMAGES.Img_24} />,
			answer: ['목표값 찾기', '통합', '피벗 테이블', '시나리오'],
			correct: 3,
		},
		{
			contentId: 25,
			question:
				'다음 워크시트에서 차트 제목을 [A1] 셀의 텍스트와 연결하여 표시하고자 할 때, 차트 제목이 선택된 상태에서 수식 입력줄에 입력할 내용은?',
			questionBody: <img src={IMAGES.Img_25} />,
			answer: ['=‘Sheet1’!$A$1', '=Sheet1!$A$1', '=‘$A$1’', '=$A$1'],
			correct: 2,
		},
		{
			contentId: 26,
			question:
				'다음 중 폼 마법사에서 선택 가능한 폼의 모양으로, 각 필드가 왼쪽의 레이블과 함께 각 행에 나타나며, 폼이 생성된 직후에는 컨트롤 레이아웃이 설정되어 있어 각각의 컨트롤을 다른 크기로 변경할 수 없는 것은?',
			answer: ['열 형식', '테이블 형식', '데이터시트', '맞춤'],
			correct: 1,
		},
		{
			contentId: 27,
			question:
				'다음 중 위쪽 구역에 데이터시트를 표시하는 열 형식의 폼을 만들고, 아래쪽 구역에 선택한 레코드에 대한 정보를 수정하거나 입력할 수 있는 데이터시트 형식의 폼을 자동으로 만들어 주는 도구는?',
			answer: ['폼', '폼 분할', '여러 항목', '폼 디자인'],
			correct: 2,
		},
		{
			contentId: 28,
			question:
				'폼 보기에서 [Tab]을 누를 때마다 탭 순서에 따라 포커스가 옮겨진다. 다음 중 폼 보기 상태에서 포커스를 가질 수 없는 컨트롤은 무엇인가?',
			answer: ['레이블', '목록 상자', '입력란', '명령 단추'],
			correct: 1,
		},
		{
			contentId: 29,
			question: '다음 중 특정 컨트롤로 포커스를 이동시키는 매크로 함수는 무엇인가?',
			answer: ['GoToRecord', 'GoToControl', 'SetValue', 'RunCode'],
			correct: 2,
		},
		{
			contentId: 30,
			question: '다음 중 액세스에서 보고서를 출력(미리보기/인쇄)하기 위한 VBA 개체와 메소드로 옳은 것은?',
			answer: ['Docmd.OpenReport', 'Report', 'Docmd.ReportPrint', 'Report.Open'],
			correct: 1,
		},
		{
			contentId: 31,
			question:
				'다음 중 폼이나 보고서의 특정 컨트롤에서 ‘=[단가]*[수량]*(1-[할인률])’과 같은 계산식을 사용하고, 계산 결과를 소수점 이하 첫째 자리까지 표시하고자 할 때 사용해야 할 함수는?',
			answer: ['Str( )', 'Val( )', 'Format( )', 'DLookUp( )'],
			correct: 3,
		},
		{
			contentId: 32,
			question: '다음 중 도메인(Domain)에 대한 설명으로 옳은 것은?',
			answer: [
				'릴레이션을 구성하는 각각의 행을 말한다.',
				'하나의 애트리뷰트가 취할 수 있는 같은 타입의 원자값들의 집합이다.',
				'데이터베이스를 구성하는 가장 작은 논리적 단위이다.',
				'파일 구조에서 레코드와 같은 의미이다.',
			],
			correct: 2,
		},
		{
			contentId: 33,
			question: '다음 중 기본키로 사용하기에 가장 적합한 필드는?',
			answer: [
				'Null 값이 있는 필드',
				'중복된 값이 있는 필드',
				'자주 값이 변경되는 필드',
				'한 릴레이션에서 특정 레코드를 유일하게 구별할 수 있는 필드',
			],
			correct: 4,
		},
		{
			contentId: 34,
			question:
				'아래와 같이 보고서의 그룹 바닥글에 도서의 총 권수와 정가의 합계를 인쇄하고자 한다. 다음 중 총 권수와 정가 합계 두 컨트롤의 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_34} />,
			answer: [
				'=Count([정가]) & “권”, =Total([정가])',
				'=CountA([정가]) & “권”, =Sum([정가])',
				'=CountA([도서명]) & “권”, =Total([정가])',
				'=Count(*) & “권”, =Sum([정가])',
			],
			correct: 4,
		},
		{
			contentId: 35,
			question:
				'[회원] 테이블에서 ‘등록일자’ 필드에 2021년 1월 1일부터 2021년 12월 31일까지의 날짜만 입력되도록 하는 유효성 검사 규칙으로 옳은 것은?',
			answer: [
				'in (#2021/01/01#, #2021/12/31#)',
				'between #2021/01/01# and #2021/12/31#',
				'in (#2021/01/01#-#2021/12/31#)',
				'between #2021/01/01# or #2021/12/31#',
			],
			correct: 2,
		},
		{
			contentId: 36,
			question: '다음 중 폼을 디자인 보기나 데이터시트 보기로 열기 위해 사용하는 매크로 함수는?',
			answer: ['RunCommand', 'OpenForm', 'RunMacro', 'RunSQL'],
			correct: 2,
		},
		{
			contentId: 37,
			question: '다음 중 SELECT 문의 선택된 필드에서 중복 데이터를 포함하는 레코드를 제외시키는 조건자로 옳은 것은?',
			answer: ['DISTINCT', 'UNIQUE', 'ONLY', '*'],
			correct: 1,
		},
		{
			contentId: 38,
			question: '쿼리를 실행할 때마다 값이나 패턴을 묻는 메시지를 표시하여 조건에 맞는 필드만 반환하는 쿼리는?',
			answer: ['크로스탭 쿼리', '매개 변수 쿼리', '추가 쿼리', '업데이트 쿼리'],
			correct: 2,
		},
		{
			contentId: 39,
			question: '다음 중 나이를 저장하기에 알맞은 데이터 형식과 크기로 올바른 것은?',
			answer: [
				'데이터 형식 : 짧은 텍스트, 크기 : 2',
				'데이터 형식 : 짧은 텍스트, 크기 : 100',
				'데이터 형식 : 숫자, 크기 : 바이트',
				'데이터 형식 : 숫자, 크기 : 정수(Long)',
			],
			correct: 3,
		},
		{
			contentId: 40,
			question: '<상품> 폼에 있는 ‘재고’ 필드를 참조하고자 한다. 참조 형식이 바르게 설정된 것은?',
			answer: ['[Forms]![상품]![재고]', '[Forms]@[상품]@[재고]', '[Forms]![상품]@[재고]', '[Forms]@[상품]![재고]'],
			correct: 1,
		},
		{
			contentId: 41,
			question: '다음은 보고서 보기 형태에 대한 내용이다. ᄀ, ᄂ에 알맞은 형태는 무엇인가?',
			questionBody: (
				<RequestBody>
					<ol style={{ listStyle: 'hangul-consonant' }}>
						<li>보고서로 출력될 실제 데이터를 보면서 컨트롤의 크기 및 위치를 변경할 수 있다.</li>
						<li>컨트롤 도구를 이용하여 보고서를 만들거나 수정할 수 있는 형태로, 실제 데이터는 표시되지 않는다.</li>
					</ol>
				</RequestBody>
			),
			answer: [
				'ᄀ 레이아웃 보기, ᄂ 디자인 보기',
				'ᄀ 인쇄 미리 보기, ᄂ 레이아웃 보기',
				'ᄀ 디자인 보기, ᄂ 보고서 보기',
				'ᄀ 레이아웃 보기, ᄂ 보고서 보기',
			],
			correct: 1,
		},
		{
			contentId: 42,
			question:
				'다음 중 아래 쿼리에서 두 테이블에 조인된 필드가 일치하는 레코드만 결합하기 위해 괄호 안에 넣어야 할 조인 유형으로 옳은 것은?',
			questionBody: (
				<RequestBody>
					SELECT 필드목록 <br />
					FROM 테이블1 ( ) 테이블2
					<br /> ON 테이블1.필드=테이블2.필드;
				</RequestBody>
			),
			answer: ['INNER JOIN', 'OUTER JOIN', 'LEFT JOIN', 'RIGHT JOIN'],
			correct: 1,
		},
		{
			contentId: 43,
			question:
				'다음 중 보고서에서 그룹 머리글의 ‘반복 실행 구역’ 속성을 ‘예’로 설정한 경우에 대한 설명으로 옳은 것은?',
			answer: [
				'매 레코드마다 해당 그룹 머리글이 표시된다.',
				'한 그룹이 여러 페이지에 걸쳐 표시되는 경우 각 페이지에 해당 그룹 머리글이 표시된다.',
				'그룹 머리글이 보고서의 시작 부분과 끝 부분에 표시된다.',
				'매 그룹의 시작 부분에 해당 그룹 머리글이 표시된다.',
			],
			correct: 2,
		},
		{
			contentId: 44,
			question: '다음이 설명하는 컨트롤은 무엇인가?',
			questionBody: (
				<RequestBody>
					<ul>
						<li>좁은 공간에서 유용하게 사용하는 컨트롤이다. </li>
						<li>목록에서 선택하거나 직접 입력할 수 있다. </li>
						<li>목록에 있는 값만 입력할 수 있도록 설정할 수 있다.</li>
					</ul>
				</RequestBody>
			),
			answer: ['텍스트 상자', '명령 단추', '콤보 상자', '확인란'],
			correct: 3,
		},
		{
			contentId: 45,
			question:
				'레코드의 위치를 지정된 레코드로 이동시키는 것으로 First, Last, Previous, Next 등의 인수가 사용되는 매크로 함수는?',
			answer: ['GoToRecord', 'GoToControl', 'FindRecord', 'FindNextRecord'],
			correct: 1,
		},
		{
			contentId: 46,
			question:
				'다음 중 <학생> 테이블의 ‘성적’ 필드에 성적을 입력하는 경우 0에서 100 사이의 숫자만 입력 가능하도록 설정하기 위한 필드 속성은?',
			answer: ['필드 크기', '필수', '유효성 검사 규칙', '기본값'],
			correct: 3,
		},
		{
			contentId: 47,
			question: '다음 중 아래의 설명에 해당하는 컨트롤로 옳은 것은?',
			questionBody: (
				<RequestBody>
					<ul>
						<li>폼이나 보고서의 원본으로 사용되는 데이터를 표시한다.</li>
						<li>계산 결과를 표시한다.</li>
					</ul>
				</RequestBody>
			),
			answer: ['레이블', '텍스트 상자', '콤보 상자', '목록 상자'],
			correct: 2,
		},
		{
			contentId: 48,
			question:
				'다음 중 ‘학번’, ‘이름’, ‘전화번호’ 필드로 동일하게 구성되어 있는 [재학생] 테이블과 [졸업생] 테이블을 통합하여 나타내는 쿼리문으로 옳은 것은?',
			answer: [
				'Select 학번, 이름, 전화번호 From 재학생, 졸업생 Where 재학생.학번 = 졸업생.학번;',
				'Select 학번, 이름, 전화번호 From 재학생 JOIN Select 학번, 이름, 전화번호 From 졸업생;',
				'Select 학번, 이름, 전화번호 From 재학생 OR Select 학번, 이름, 전화번호 From 졸업생;',
				'Select 학번, 이름, 전화번호 From 재학생 UNION Select 학번, 이름, 전화번호 From 졸업생;',
			],
			correct: 4,
		},
		{
			contentId: 49,
			question: '다음 괄호(ᄀ, ᄂ)에 순서대로 들어갈 내용으로 알맞은 것은?',
			questionBody: (
				<RequestBody>
					폼 안에 있는 또 하나의 폼을 ( ᄀ )이라고 하며, ( ᄀ )에서 여러 개의 연결 필드를 지정할 때에 사용 되는 구분자는
					( ᄂ )이다.
				</RequestBody>
			),
			answer: ['하위 폼, 콤마(,)', '하위 폼, 세미콜론(;)', '기본 폼, 콤마(,)', '연속 폼, 세미콜론(;)'],
			correct: 2,
		},
		{
			contentId: 50,
			question: '다음 중 두 테이블의 조인된 필드가 일치하는 행만 포함하여 보여주는 조인 방법은?',
			answer: ['간접 조인', '내부 조인', '외부 조인', '중복 조인'],
			correct: 2,
		},
	],
};

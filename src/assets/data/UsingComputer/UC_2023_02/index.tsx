import IMAGES from './images';
import { VStack } from '../../../../components/Common';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const UC_2023_02: Question = {
	questionId: 202302,
	title: '2023 상시 2회차',
	contents: [
		{
			contentId: 1,
			question:
				'웹 기반 애플리케이션을 활용하여 인터넷 개인 서버에서 대용량 데이터베이스를 연산(처리)하고 저장한 데이터를 PC나 스마트폰, Pad 등 다양한 단말기에서 불러오거나 가공할 수 있도록 하는 환경을 의미하는 것은?',
			answer: [
				'클라우드 컴퓨팅(Cloud Computing)',
				'그리드 컴퓨팅(Grid Computing)',
				'사물 인터넷(Internet of Things)',
				'빅 데이터(Big Data)',
			],
			correct: 1,
		},
		{
			contentId: 2,
			question: '데이터 통신망 중 부가가치 통신망(VAN)에 관한 설명으로 옳은 것은?',
			answer: [
				'자원 공유를 목적으로 전송 거리가 짧은 구내에서 사용하는 통신망이다.',
				'기간 통신망 사업자로부터 회선을 빌려 기존의 정보에 새로운 가치를 부여하여 다수의 이용자에게 판매하는 통신망이다.',
				'문자, 음성, 동영상 등 다양한 데이터를 통합하여 디지털화된 하나의 통신 회선으로 전송하는 통신망이다.',
				'전화국과 가입자 단말 사이의 회선을 유선 대신 무선 시스템을 이용하여 구성하는 통신망이다.',
			],
			correct: 2,
		},
		{
			contentId: 3,
			question: '다음 중 한글 Windows 10의 레지스트리에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'Windows의 자체 구성 정보를 저장하는 데이터베이스이다.',
				'Windows에 탑재된 레지스트리 편집기는 ‘regedit.exe’이다.',
				'레지스트리 정보는 Windows의 부팅 시에만 참조된다.',
				'레지스트리에는 각 사용자의 프로필과 시스템 하드웨어, 설치된 프로그램 및 속성 설정에 대한 정보가 들어 있다.',
			],
			correct: 3,
		},
		{
			contentId: 4,
			question: '다음 중 한글 Windows 10의 [폴더 옵션] 대화상자에서 설정할 수 있는 작업으로 옳지 않은 것은?',
			answer: [
				'숨김 파일이나 폴더의 표시 여부를 지정할 수 있다.',
				'알려진 파일 형식의 파일 확장명을 숨기도록 설정할 수 있다.',
				'탐색 창, 미리 보기 창, 세부 정보 창의 표시 여부를 선택할 수 있다.',
				'폴더에서 시스템 파일을 검색할 때 색인의 사용 여부를 선택할 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 5,
			question:
				'다음 중 한글 Windows 10에서 설치된 기본 프린터의 인쇄 관리자 창에서 실행할 수 있는 작업으로 옳지 않은 것은?',
			answer: [
				'인쇄 중인 문서나 오류가 발생한 문서를 다른 프린터로 전송할 수 있다.',
				'인쇄 작업이 시작된 문서도 중간에 강제로 인쇄를 종료할 수 있으며 잠시 중지시켰다가 다시 인쇄할 수 있다.',
				'[프린터] 메뉴에서 [모든 문서 취소]를 선택하면 스풀러에 저장되어 있는 모든 인쇄 작업을 취소할 수 있다.',
				'인쇄 대기 중인 문서를 삭제하거나 출력 대기 순서를 임의로 조정할 수 있다.',
			],
			correct: 1,
		},
		{
			contentId: 6,
			question: '다음 중 파일의 바로 가기 메뉴 [연결 프로그램]에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'문서나 그림 같은 데이터 파일을 더블클릭할 때 자동으로 실행되는 앱을 의미한다.',
				'파일의 바로 가기 메뉴에서 [연결 프로그램]을 선택하면 연결 프로그램을 변경할 수 있다.',
				'연결 프로그램이 지정되지 않았을 경우 데이터 파일을 더블 클릭하면 연결 프로그램을 선택하기 위한 대화상자가 표시된다.',
				'[연결 프로그램] 대화상자에서 연결 프로그램을 삭제하면 연결된 데이터 파일도 함께 삭제된다.',
			],
			correct: 4,
		},
		{
			contentId: 7,
			question:
				'다음 중 특정한 목적을 위한 작은 컴퓨터 시스템으로 하드웨어와 소프트웨어가 하나로 조합되어 있고, TV, 냉장고, 밥솥 등의 가전 제품에 사용되는 시스템은?',
			answer: ['임베디드 시스템', '듀얼 시스템', '듀플렉스 시스템', '시분할 시스템'],
			correct: 1,
		},
		{
			contentId: 8,
			question: '다음 중 컴퓨터의 연산장치에 있는 레지스터에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'누산기는 연산 결과를 일시적으로 저장한다.',
				'가산기는 2진수 덧셈을 수행한다.',
				'보수기는 곱셈과 나눗셈을 위하여 데이터를 보수로 변환한다.',
				'상태 레지스터는 연산 중에 발생하는 여러 가지 상태값을 기억한다.',
			],
			correct: 3,
		},
		{
			contentId: 9,
			question: '다음 중 컴퓨터 그래픽과 관련하여 벡터(Vector) 이미지에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'픽셀로 이미지를 표현하며, 래스터(Raster) 이미지라고도 한다.',
				'점을 연결하는 직선이나 곡선을 이용하여 이미지를 구성한다.',
				'대표적인 파일 형식에는 AI, WMF 등이 있다.',
				'이미지의 크기를 확대하여도 화질에 손상이 없다.',
			],
			correct: 1,
		},
		{
			contentId: 10,
			question: '다음 중 인터넷 주소 체계인 IPv6(Internet Protocol version 6)에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'주소의 확장성, 융통성, 연동성이 뛰어나며 실시간 흐름 제어로 향상된 멀티미디어 서비스를 제공할 수 있다.',
				'16비트씩 4부분, 총 64비트의 주소를 사용하여 IP 주소의 부족 문제를 해결할 수 있다.',
				'주소 체계는 유니캐스트(Unicast), 애니캐스트(Anycast), 멀티캐스트(Multicast) 등 세 가지로 나뉜다.',
				'인증 서비스, 비밀성 서비스, 데이터 무결성 서비스를 제공함 으로써 보안 문제를 해결할 수 있다.',
			],
			correct: 2,
		},
		{
			contentId: 11,
			question: '다음 중 시스템의 정보 보안을 위한 기본 충족 요건에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'무결성: 시스템 내의 정보는 인가된 사용자만 수정할 수 있다.',
				'부인방지 : 정보를 보내오는 사람의 신원을 확인한다.',
				'가용성: 인가받은 사용자는 언제라도 사용할 수 있다.',
				'기밀성 : 시스템 내의 정보와 자원은 인가된 사용자에게만 접근이 허용된다.',
			],
			correct: 2,
		},
		{
			contentId: 12,
			question: '다음 중 소프트웨어 자체에 광고를 포함하여 이를 보는 대가로 무료로 사용하는 소프트웨어는?',
			answer: ['스파이웨어(Spyware)', '애드웨어(Adware)', '프리웨어(Freeware)', '셰어웨어(Shareware)'],
			correct: 2,
		},
		{
			contentId: 13,
			question: '다음 중 레지스터(Register)에 대한 설명 중 옳지 않은 것은?',
			answer: [
				'레지스터의 크기는 컴퓨터가 한 번에 처리할 수 있는 데이터의 크기를 나타낸다.',
				'구조는 플립플롭(Flip-Flop)이나 래치(Latch)를 직렬 또는 병렬로 연결한다.',
				'CPU 내부에서 처리할 명령어나 연산 결과 값을 일시적으로 저장하는 기억장치이다.',
				'펌웨어(Firmware)를 저장하는 비휘발성 메모리로 액세스 속도가 가장 빠른 기억장치이다.',
			],
			correct: 4,
		},
		{
			contentId: 14,
			question: '다음 중 방화벽에 대한 설명으로 적절하지 않은 것은?',
			answer: [
				'보안이 필요한 네트워크의 통로를 단일화하여 관리한다.',
				'방화벽 시스템은 내부와 외부로부터 불법적인 해킹을 완전히 차단할 수 있다.',
				'권한이 없는 사용자가 네트워크를 통해 컴퓨터에 액세스 하는 것을 방지한다.',
				'역추적 기능으로 외부 침입자의 흔적을 찾을 수 있다.',
			],
			correct: 2,
		},
		{
			contentId: 15,
			question: '다음 중 멀티미디어의 특징에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'용이성(Easiness) : 각각의 분리된 매체(오디오 등)보다 콘텐츠 제작이 용이하다.',
				'비선형성(Non-Linear) : 데이터가 일정한 방향으로 순차적으로 처리되는 것이 아니라 사용자의 선택에 따라 다양한 방향으로 처리된다.',
				'디지털화(Digitization) : 여러 종류의 정보를 컴퓨터로 처리하기 위해서 디지털 방식으로 변환하여 처리한다.',
				'상호 작용성(Interaction) : 정보 제공자의 선택에 의해 일방적으로 데이터가 전달되는 것이 아니라 정보 제공자와 사용자 간의 의견을 통한 상호 작용에 의해 데이터가 전달된다.',
			],
			correct: 1,
		},
		{
			contentId: 16,
			question: '다음 중 멀티미디어와 관련하여 MPEG(Moving Picture Experts Group)에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'동영상 전문가 그룹에서 제정한 동영상 압축 기술에 대한 국제 표준 기술이다.',
				'MPEG4는 멀티미디어 통신을 전제로 만들어진 영상 압축 기술로서 낮은 전송률로 동영상을 보내고자 개발된 데이터 압축과 복원 기술이다.',
				'프레임 간의 연관성을 고려하여 중복 데이터를 제거하는 비손실 압축 기법을 사용한다.',
				'동영상뿐만 아니라 오디오 데이터도 압축할 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 17,
			question: '다음 중 TCP/IP 프로토콜에서 IP 프로토콜의 개요 및 기능에 관한 설명으로 옳은 것은?',
			answer: [
				'메시지를 송/수신자의 주소와 정보로 묶어 패킷 단위로 나눈다.',
				'패킷 주소를 해석하고 경로를 결정하여 다음 호스트로 전송한다.',
				'전송 데이터의 흐름을 제어하고 데이터의 에러를 검사한다.',
				'OSI 7계층에서 전송 계층에 해당한다.',
			],
			correct: 2,
		},
		{
			contentId: 18,
			question: '다음 중 RAID에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'RAID의 구성 방식을 RAID Level이라 하고, Level의 숫자가 작을수록 저장장치의 신뢰성이 높고 효율성이 좋다.',
				'주로 서버에서 사용하며, 데이터의 안전성이 높다.',
				'RAID를 사용하면 데이터 복구가 용이하며, 속도도 빨라진다.',
				'여러 개의 하드디스크를 모아서 하나의 하드디스크처럼 사용할 수 있도록 하는 기술이다.',
			],
			correct: 1,
		},
		{
			contentId: 19,
			question: '다음 중 PC 관리에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'컴퓨터의 성능 향상을 위해 주기적으로 디스크 정리, 드라이브 오류 검사, 드라이브 최적화 등을 실행하는 것이 좋다.',
				'직사광선과 습기가 많거나 자성이 강한 물체가 있는 곳은 피하는 것이 좋다.',
				'컴퓨터 전용 전원 장치를 단독으로 사용하고, 전원을 끌 때는 사용 중인 프로그램을 먼저 종료하는 것이 좋다.',
				'바이러스를 예방하기 위하여 BIOS 업데이트를 자주 실행한다.',
			],
			correct: 4,
		},
		{
			contentId: 20,
			question:
				'다음 중 한글 Windows 10에서 하드디스크의 용량 부족 문제가 발생하였을 때의 해결 방법으로 적절하지 않은 것은?',
			answer: [
				'[휴지통 비우기]를 수행한다.',
				'[디스크 정리]를 통해 임시 파일들을 삭제한다.',
				'사용하지 않는 응용 프로그램을 삭제한다.',
				'드라이브 조각 모음 및 최적화를 수행한다.',
			],
			correct: 4,
		},
		{
			contentId: 21,
			question: '다음 중 여러 워크시트를 선택하여 그룹으로 설정한 경우에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'엑셀 창의 맨 위 제목 표시줄에 [그룹]이라고 표시된다.',
				'그룹으로 설정된 임의의 시트에서 데이터를 입력하면 그룹으로 설정된 모든 시트에 반영된다.',
				'그룹으로 설정된 임의의 시트에서 셀 서식을 지정하면 그룹으로 설정된 모든 시트에 반영된다.',
				'그룹을 해제하려면 [Esc]를 누른다.',
			],
			correct: 4,
		},
		{
			contentId: 22,
			question: '다음 중 윗주에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'윗주는 셀에 대한 주석을 설정하는 것이다.',
				'데이터를 삭제해도 윗주는 그대로 표시되어 있다.',
				'문자열 데이터가 입력되어 있는 셀에만 윗주를 표시할 수 있다.',
				'윗주의 서식을 변경할 수 있다.',
			],
			correct: 2,
		},
		{
			contentId: 23,
			question: '[찾기 및 바꾸기] 대화상자에서 ‘*’ 문자 자체를 찾는 방법은?',
			answer: [
				'찾을 내용’에 “%*”를 입력한다.',
				'찾을 내용’에 “!*”를 입력한다.',
				'찾을 내용’에 “~*”를 입력한다.',
				'찾을 내용’에 “$*”를 입력한다.',
			],
			correct: 3,
		},
		{
			contentId: 24,
			question:
				'다음 중 연속적인 위치에 데이터가 입력되어 있는 여러 개의 셀을 범위로 설정한 후, 셀 병합을 실행하였을 때의 결과에 대한 설명으로 옳은 것은?',
			answer: [
				'기존에 입력되어 있던 데이터들이 한 셀에 모두 표시된다.',
				'데이터가 들어 있는 여러 셀은 셀 보호가 자동으로 설정되어 병합할 수 없다.',
				'가장 아래쪽 또는 오른쪽의 셀 데이터만 남고 나머지 셀 데이터는 모두 지워진다.',
				'가장 위쪽 또는 왼쪽의 셀 데이터만 남고 나머지 셀 데이터는 모두 지워진다.',
			],
			correct: 4,
		},
		{
			contentId: 25,
			question: '숫자 123.45를 입력한 후 아래의 표시 형식을 적용했을 때 표시되는 결과로 옳은 것은?',
			questionBody: <RequestBody>{'[>200]0;(0);0“*”'}</RequestBody>,
			answer: ['123.45', '(123)', '123', '123*'],
			correct: 4,
		},
		{
			contentId: 26,
			question:
				'아래 시트에서 [A2:C4] 영역을 선택한 후 조건부 서식을 그림과 같이 설정하였다. 다음 중 이에 대한 설명으로 옳은 것은? (단, 규칙의 적용 대상은 $A$2:$C$4임)',
			questionBody: (
				<VStack>
					<img src={IMAGES.Img_26_1} />
					<img src={IMAGES.Img_26_2} />
				</VStack>
			),
			answer: [
				'[A3:C3] 영역이 조건부 서식의 첫번째 규칙에 설정된 서식으로 바뀐다.',
				'[B3] 셀만 조건부 서식의 첫번째 규칙에 설정된 서식으로 바뀐다.',
				'[A3:C3] 영역이 조건부 서식의 두번째 규칙에 설정된 서식으로 바뀐다.',
				'[A3] 셀만 조건부 서식의 두번째 규칙에 설정된 서식으로 바뀐다.',
			],
			correct: 1,
		},
		{
			contentId: 27,
			question: '다음 중 아래의 워크시트에서 [C1] 셀에 수식 ‘=A1+B1+C1’을 입력할 경우 발생하는 상황으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_27} />,
			answer: [
				'[C1] 셀에 ‘#REF!’ 오류 표시',
				'[C1] 셀에 ‘#NUM!’ 오류 표시',
				'데이터 유효성 오류 메시지 창 표시',
				'순환 참조 경고 메시지 창 표시',
			],
			correct: 4,
		},
		{
			contentId: 28,
			question: '아래의 시트에서 [A6] 셀에 수식 “=SUM(OFFSET(A1, 1, 0, 3, 1))”을 입력했을 때 알맞은 결과값은?',
			questionBody: <img src={IMAGES.Img_28} />,
			answer: ['9', '27', '6', '15'],
			correct: 2,
		},
		{
			contentId: 29,
			question:
				'아래 워크시트에서 매출액[B3:B9]을 이용하여 매출 구간별 빈도수를 [F3:F6] 영역에 계산하고자 한다. 다음 중 이를 위한 배열 수식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_29} />,
			answer: [
				'{=PERCENTILE(B3:B9, E3:E6)}',
				'{=PERCENTILE(E3:E6, B3:B9)}',
				'{=FREQUENCY(B3:B9, E3:E6)}',
				'{=FREQUENCY(E3:E6, B3:B9)}',
			],
			correct: 3,
		},
		{
			contentId: 30,
			question:
				'아래 워크시트에서 [A1:C2] 영역을 범위로 설정하고, 그림과 같이 입력하고 [Ctrl]+[Shift]+[Enter]를 눌렀다. [A5] 셀에 ‘=A1+B2’를 입력했을 때 결과는?',
			questionBody: <img src={IMAGES.Img_30} />,
			answer: ['4', '5', '6', '7'],
			correct: 2,
		},
		{
			contentId: 31,
			question: '다음 중 엑셀 차트의 추세선에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'추세선은 지수, 선형, 로그, 다항식, 거듭제곱, 이동 평균 등 6가지의 종류가 있다.',
				'하나의 데이터 계열에 두 개 이상의 추세선을 동시에 표시할 수는 없다.',
				'방사형, 원형, 도넛형 차트에는 추세선을 사용할 수 없다.',
				'추세선이 추가된 데이터 계열의 차트 종류를 3차원으로 바꾸면 추세선이 사라진다.',
			],
			correct: 2,
		},
		{
			contentId: 32,
			question: '다음 중 워크시트의 화면 [확대/축소]에 관한 설명으로 옳지 않은 것은?',
			questionBody: <img src={IMAGES.Img_32} />,
			answer: [
				'[선택 영역 확대/축소] 명령은 선택된 영역으로 전체 창을 채우도록 워크시트를 확대하거나 축소한다.',
				'문서의 확대/축소는 10%에서 400%까지 설정할 수 있다.',
				'설정한 확대/축소 배율은 통합 문서의 모든 시트에 자동으로 적용된다.',
				'화면의 확대/축소는 단지 화면에서 보이는 상태만을 확대/축소하는 것으로 인쇄 시 적용되지 않는다.',
			],
			correct: 3,
		},
		{
			contentId: 33,
			question: '다음 중 [인쇄 미리 보기]에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'[인쇄 미리 보기 및 인쇄]에서 ‘여백 표시’를 선택한 경우 마우스로 여백을 변경할 수 있다.',
				'[인쇄 미리 보기 및 인쇄] 화면을 표시하는 바로 가기 키는 [Ctrl]+[F2]이다.',
				'[인쇄 미리 보기 및 인쇄] 화면에서 인쇄 영역을 다시 설정할 수 있다.',
				'인쇄될 내용이 없는 상태에서 [인쇄 미리 보기 및 인쇄] 화면을 실행하면 인쇄할 내용이 없다는 메시지가 표시된다.',
			],
			correct: 3,
		},
		{
			contentId: 34,
			question: '다음 중 데이터 정렬에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'대/소문자를 구분하여 정렬할 수 있다.',
				'표 안에서 다른 열에는 영향을 주지 않고 선택한 한 열내에서만 정렬하도록 할 수 있다.',
				'행을 기준으로 정렬하려면 [정렬] 대화상자의 [옵션]에서 정렬 옵션의 방향을 ‘위쪽에서 아래쪽’으로 선택한다.',
				'정렬 기준으로 ‘셀 아이콘’을 선택한 경우 기본 정렬 순서는 ‘위에 표시’이다.',
			],
			correct: 3,
		},
		{
			contentId: 35,
			question:
				'다음 워크시트에서 종료기간이 3월인 레코드를 검색하려고 할 때 고급 필터의 조건으로 올바르게 표현된 것은?',
			questionBody: <img src={IMAGES.Img_35_1} />,
			answer: [
				<img src={IMAGES.Img_35_2} key={'UC_2024_02_35'} />,
				<img src={IMAGES.Img_35_3} key={'UC_2024_02_35'} />,
				<img src={IMAGES.Img_35_4} key={'UC_2024_02_35'} />,
				<img src={IMAGES.Img_35_5} key={'UC_2024_02_35'} />,
			],
			correct: 1,
		},
		{
			contentId: 36,
			question: '다음 중 아래의 피벗 테이블에 대한 설명으로 옳지 않는 것은?',
			questionBody: <img src={IMAGES.Img_36} />,
			answer: [
				'보고서 필터로 사용된 필드는 ‘구분’과 ‘차종’이다.',
				'행 레이블로 사용된 필드는 ‘이름’과 ‘입사’이다.',
				'값 영역에 사용된 필드는 ‘부서’이다.',
				'이지원은 ‘총무부’이며 통근거리는 ‘25’이다.',
			],
			correct: 3,
		},
		{
			contentId: 37,
			question: '다음 중 매크로를 작성하고 사용하는 방법에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'매크로를 기록하는 경우 기본적으로 셀은 절대 참조로 기록되며, 상대 참조로 기록하고자 할 경우 ‘상대 참조로 기록’을 선택한 다음 매크로 기록을 실행한다.',
				'매크로에 지정된 바로 가기 키가 엑셀 고유의 바로 가기 키와 중복될 경우 엑셀 고유의 바로 가기 키가 우선한다.',
				'매크로를 기록하는 경우 실행하려는 작업을 완료하는 데 필요한 모든 단계가 매크로 레코더에 기록되며, 리본 메뉴에서의 탐색은 기록된 단계에 포함되지 않는다.',
				'개인용 매크로 통합 문서에 저장한 매크로는 엑셀을 시작할 때마다 자동으로 로드되므로 다른 통합 문서에서도 실행할 수 있다.',
			],
			correct: 2,
		},
		{
			contentId: 38,
			question: '다음 중 아래 [시나리오 관리자] 대화상자의 각 버튼에 대한 설명으로 옳지 않은 것은?',
			questionBody: <img src={IMAGES.Img_38} />,
			answer: [
				'표시 : 선택한 시나리오에 대해 결과를 표시한다.',
				'편집 : 선택한 시나리오를 변경한다.',
				'병합 : ‘시나리오 관리자’에 표시된 시나리오를 병합한다.',
				'요약 : 시나리오에 대한 요약 보고서나 피벗 테이블을 작성한다.',
			],
			correct: 3,
		},
		{
			contentId: 39,
			question: '다음 중 1부터 10까지의 합을 구하는 VBA 모듈로 옳지 않은 것은?',
			answer: [
				'no = 0\nsum = 0\nDo While no <= 10\n\tsum = sum + no\n\tno = no + 1\nLoop\nMsgBox sum',
				'no = 0\nsum = 0\nDo\n\tsum = sum + no\n\tno = no + 1\nLoop While no <= 10\nMsgBox sum',
				'no = 0\nsum = 0\nDo While no < 10\n\tsum = sum + no\n\tno = no + 1\nLoop\nMsgBox sum',
				'sum = 0\nFor no = 1 To 10\n\tsum = sum + no\nNext\nMsgBox sum',
			],
			correct: 3,
		},
		{
			contentId: 40,
			question: '다음과 같은 이벤트를 실행시켰을 때 나타나는 결과로 옳은 것은?',
			questionBody: (
				<RequestBody>
					{
						'Private Sub Worksheet_Activate( )\n\tRange(“A1”).Select\n\tSelection.Sort Key1:=Range(“A2”), _ \n\tOrder1:=xlAscending, Header:=xlGuess, _ \n\tOrderCustom:=1, MatchCase:=False, _ \n\tOrientation:=xlTopToBottom\nEnd Sub'
					}
				</RequestBody>
			),
			answer: [
				'워크시트가 활성화될 때 [A2] 셀을 기준으로 오름차순 정렬한다.',
				'이벤트가 실행된 후에는 [A2] 셀이 선택되어 있다.',
				'활성화 셀이 바뀔 때마다 [A1] 셀을 기준으로 내림차순 정렬한다.',
				'행을 기준으로 정렬한다.',
			],
			correct: 1,
		},
		{
			contentId: 41,
			question: '다음 중 [보고서 마법사]로 보고서를 만드는 과정에 대한 설명으로 틀린 것은?',
			answer: [
				'보고서 마법사는 정해진 절차에 따라 설정 사항을 지정하면 보고서를 자동으로 만들어 준다.',
				'그룹을 설정한 경우 보고서 모양을 단계, 블록, 외곽선 중에서 선택할 수 있다.',
				'[요약 옵션]에서 모든 필드에 대해 합계, 평균, 개수 등의 함수를 사용하여 값을 표시할 수 있다.',
				'레코드 원본, 필드, 레이아웃, 서식 등을 직접 선택하여 보고서를 작성할 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 42,
			question: '다음 중 보고서 그룹화에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'그룹으로 지정된 필드의 정렬 기준은 변경할 수 없으며, 기본적으로 오름차순으로 정렬된다.',
				'텍스트 형식은 전체값, 첫 문자, 처음 두 문자, 사용자 지정 문자를 기준으로 그룹화할 수 있다.',
				'그룹화 할 필드가 날짜 데이터이면 실제 값(기본)·일·주·월·분기·연도를 기준으로 그룹화할 수 있다.',
				'그룹을 만들려면 머리글 구역 표시나 바닥글 구역 표시 중 하나 이상을 설정해야 한다.',
			],
			correct: 1,
		},
		{
			contentId: 43,
			question: '다음 중 기본키(Primary Key)에 대한 설명으로 옳은 것은?',
			answer: [
				'모든 테이블에는 기본키를 반드시 설정해야 한다.',
				'액세스에서는 단일 필드 기본키와 일련 번호 기본키만 정의 가능하다.',
				'데이터가 이미 입력된 필드도 기본키로 지정할 수 있다.',
				'OLE 개체나 첨부 파일 형식의 필드에도 기본키를 지정할 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 44,
			question:
				'다음 중 [학생] 테이블에서 ‘점수’가 60 이상인 학생들의 인원수를 구하는 식으로 옳은 것은? (단, ‘학번’ 필드는 [학생] 테이블의 기본 키이다.)',
			answer: [
				'=DCount(“[학생]”, “[학번]”, “[점수] >= 60”)',
				'=DCount(“[학번]”, “[학생]”, “[점수] >= 60”)',
				'=DLookUp(“[학생]”, “[학번]”, “[점수] >= 60”)',
				'=DLookUp(“*”, “[학생]”, “[점수] >= 60”)',
			],
			correct: 2,
		},
		{
			contentId: 45,
			question: '다음 중 데이터베이스 관리 시스템(DBMS)의 장점에 해당하지 않는 것은?',
			answer: ['데이터의 일관성 유지', '데이터의 무결성 유지', '데이터의 보안 보장', '데이터 간의 종속성 유지'],
			correct: 4,
		},
		{
			contentId: 46,
			question:
				'다음 페이지 번호식을 이용하여 출력되는 예로 옳은 것은? (단, 현재 페이지는 12이고, 전체 페이지 수는 50이다.)',
			questionBody: <RequestBody>{"=[page] & 'pages'"}</RequestBody>,
			answer: ['12 & 50', '1250', '12pages', '50pages'],
			correct: 3,
		},
		{
			contentId: 47,
			question: '다음의 쿼리 조건과 동일한 결과를 산출하는 것은 무엇인가?',
			questionBody: <img src={IMAGES.Img_47} />,
			answer: ['“서울” Or “전주”', '“서울” || “전주”', '“서울” And “전주”', '“서울” && “전주”'],
			correct: 1,
		},
		{
			contentId: 48,
			question: '다음 중 아래의 VBA 코드를 실행한 결과 메시지 상자에 표시되는 내용은 무엇인가?',
			questionBody: (
				<RequestBody>
					{
						'Private Sub Form_Load( ) \n\tDim SampleString \n\tSampleString = “대한상공회의소” \n\tMid(SampleString, 3, 2) = “활용” \n\tMsgBox (SampleString) \nEnd Sub'
					}
				</RequestBody>
			),
			answer: ['대한상공회의소', '상공', '대한활용회의소', '활용'],
			correct: 3,
		},
		{
			contentId: 49,
			question:
				'아래와 같이 조회할 고객의 최소 나이를 입력받아 검색하는 매개 변수 쿼리를 작성하려고 한다. 다음 중 ‘Age’ 필드의 조건식으로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_49} />,
			answer: [
				'>= {조회할 최소 나이 입력}',
				'>=“조회할 최소 나이 입력”',
				'>=[조회할 최소 나이 입력]',
				'>= (조회할 최소 나이 입력)',
			],
			correct: 3,
		},
		{
			contentId: 50,
			question:
				'다음 중 아래 SQL문으로 생성된 테이블에서의 레코드 작업에 대한 설명으로 옳지 않은 것은? (단, 고객과 계좌 간의 관계는 1:M이다.)',
			questionBody: (
				<RequestBody>
					{
						'CREATE TABLE 고객 \n\t(고객ID CHAR(20) NOT NULL, \n\t고객명 CHAR(20) NOT NULL, \n\t연락번호 CHAR(12), \n\tPRIMARY KEY (고객ID) \n\t); \nCREATE TABLE 계좌 \n\t(계좌번호 CHAR(10) NOT NULL, \n\t고객ID CHAR(20) NOT NULL, \n\t잔액 INTEGER DEFAULT 0, \n\tPRIMARY KEY (계좌번호), \n\tFOREIGN KEY (고객ID) REFERENCES 고객 \n\t);'
					}
				</RequestBody>
			),
			answer: [
				'<고객> 테이블에서 ‘고객ID’ 필드는 동일한 값을 입력할 수 없다.',
				'<계좌> 테이블에서 ‘계좌번호’ 필드는 반드시 입력해야 한다.',
				'<고객> 테이블에서 ‘연락번호’ 필드는 원하는 값으로 수정하거나 생략할 수 있다.',
				'<계좌> 테이블에서 ‘고객ID’ 필드는 동일한 값을 입력할 수 없다.',
			],
			correct: 4,
		},
		{
			contentId: 51,
			question: '다음 중 아래 SQL 문에 대한 설명으로 옳은 것은?',
			questionBody: <RequestBody>{'UPDATE 학생 SET 주소=‘서울’\nWHERE 학번=100;'}</RequestBody>,
			answer: [
				'[학생] 테이블에 주소가 ‘서울’이고 학번이 100인 레코드를 추가한다.',
				'[학생] 테이블에서 주소가 ‘서울’이고 학번이 100인 레코드를 검색한다.',
				'[학생] 테이블에서 학번이 100인 레코드의 주소를 ‘서울’로 갱신한다.',
				'[학생] 테이블에서 주소가 ‘서울’인 레코드의 학번을 100으로 갱신한다.',
			],
			correct: 3,
		},
		{
			contentId: 52,
			question: '다음 중 쿼리에서 사용하는 문자열 조건에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'“수학” or “영어” : “수학”이나 “영어”인 레코드를 찾는다.',
				'LIKE “서울*” : “서울”이라는 문자열로 시작하는 필드를 찾는다.',
				'LIKE “*신림*” : 문자열의 두 번째가 “신”이고 세 번째가 “림”인 문자열을 찾는다.',
				'NOT “전산과” : 문자열의 값이 “전산과”가 아닌 문자열을 찾는다.',
			],
			correct: 3,
		},
		{
			contentId: 53,
			question: '아래는 쿼리의 ‘디자인 보기’이다. 다음 중 아래 쿼리의 실행 결과로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_53} />,
			answer: [
				'2018년 전에 입학했거나 컴퓨터공학을 전공하는 지도 학생들의 이름과 전공을 표시',
				'2018년 전에 입학하여 컴퓨터공학을 전공하는 지도 학생들의 이름과 전공을 표시',
				'2018년 전에 입학했거나 컴퓨터공학을 전공하는 지도 학생들의 이름, 전공, 입학연도를 표시',
				'2018년 전에 입학하여 컴퓨터공학을 전공하는 지도 학생의 이름, 전공, 입학연도를 표시',
			],
			correct: 2,
		},
		{
			contentId: 54,
			question:
				'다음 중 <학생> 테이블의 ‘나이’ 필드에 유효성 검사 규칙을 아래와 같이 지정한 경우 데이터 입력 상황에 대한 설명으로 옳은 것은?',
			questionBody: (
				<table>
					<tr>
						<th>유효성 검사 규칙</th>
						<td>{'>20'}</td>
					</tr>
					<tr>
						<th>유효성 검사 텍스트</th>
						<td>{'숫자는 >20으로 입력합니다.'}</td>
					</tr>
				</table>
			),
			answer: [
				'데이터를 입력하려고 하면 항상 “숫자는 >20으로 입력합니다.”라는 메시지가 먼저 표시된다.',
				'20을 입력하면 “숫자는 >20으로 입력합니다.”라는 메시지가 표시된 후 입력 값이 정상적으로 저장된다.',
				'20을 입력하면 “숫자는 >20으로 입력합니다.”라는 메시지가 표시되며, 값을 다시 입력을 해야만 한다.',
				'30을 입력하면 “유효성 검사 규칙에 맞습니다.”라는 메시지가 표시된 후 입력 값이 정상적으로 저장된다.',
			],
			correct: 3,
		},
		{
			contentId: 55,
			question: '다음 중 아래의 <급여> 테이블에 대한 SQL 명령과 실행 결과로 옳지 않은 것은? (단, 빈 칸은 Null임)',
			questionBody: (
				<table>
					<tr>
						<th>사원번호</th>
						<th>성명</th>
						<th>가족수</th>
					</tr>
					<tr>
						<td>1</td>
						<td>가</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2</td>
						<td>나</td>
						<td>4</td>
					</tr>
					<tr>
						<td>3</td>
						<td>다</td>
						<td></td>
					</tr>
				</table>
			),
			answer: [
				'SELECT COUNT(성명) FROM 급여; 를 실행한 결과는 3이다.',
				'SELECT COUNT(가족수) FROM 급여; 를 실행한 결과는 3이다.',
				'SELECT COUNT(*) FROM 급여; 를 실행한 결과는 3이다.',
				'SELECT COUNT(*) FROM 급여 WHERE 가족수 Is Null;을 실행한 결과는 1이다.',
			],
			correct: 2,
		},
		{
			contentId: 56,
			question: '다음 중 아래의 설명에 해당하는 컨트롤로 옳은 것은?',
			questionBody: (
				<RequestBody>
					<ul>
						<li>폼이나 보고서의 원본으로 사용되는 데이터를 표시한다. </li>
						<li>계산 결과를 표시한다.</li>
					</ul>
				</RequestBody>
			),
			answer: ['레이블', '텍스트상자', '콤보상자', '목록상자'],
			correct: 2,
		},
		{
			contentId: 57,
			question: '다음 중 보고서의 ‘페이지 설정’ 대화상자에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'열의 너비와 높이를 보고서 본문의 너비와 높이에 맞춰 인쇄할 수 있다.',
				'‘페이지 설정’ 대화상자에 설정한 사항은 모든 보고서에 동일하게 적용된다.',
				'여백, 용지 방향, 프린터 유형을 지정할 수 있다.',
				'[인쇄 옵션] 탭의 ‘데이터만 인쇄’를 선택하여 체크 표시하면 컨트롤의 테두리, 눈금선 및 선이나 상자 같은 그래픽을 표시하지 않는다.',
			],
			correct: 2,
		},
		{
			contentId: 58,
			question:
				'보고서는 데이터를 사용자가 원하는 형태로 출력해 주는 역할을 수행한다. 다음 중 보고서에서 이용할 수 있는 레코드 원본으로 가장 적절하지 않은 것은?',
			answer: [
				'외부의 엑셀 파일에 대한 연결 테이블',
				'액세스의 수식 작성 규칙에 맞게 [식 작성기]로 작성한 수식',
				'여러 테이블이나 쿼리를 이용하여 원하는 데이터를 조회하게 해주는 SQL문',
				'테이블의 내용 중에서 원하는 형태의 데이터만을 조회하도록 작성해서 저장해 놓은 쿼리',
			],
			correct: 2,
		},
		{
			contentId: 59,
			question:
				'테이블 디자인의 조회 표시에서 콤보 상자나 목록 상자를 선택하면 여러 가지 속성이 표시된다. 속성에 대한 설명 중 옳지 않은 것은?',
			answer: [
				'행 원본 : 목록으로 제공할 데이터를 지정한다.',
				'바운드 열 : 표시되는 열의 개수를 지정한다.',
				'컨트롤 표시 : 콤보 상자나 목록 상자를 선택한다.',
				'목록 값만 허용: ‘예’로 설정하면 목록에 제공된 데이터 이외의 값을 추가할 수 없다.',
			],
			correct: 2,
		},
		{
			contentId: 60,
			question: '다음 중 각 연산식에 대한 결과 값이 옳지 않은 것은?',
			answer: [
				'IIF(1, 2, 3) → 결과 값 : 2',
				'MID(“123456”, 3, 2) → 결과 값 : 34',
				'“A” & “B” → 결과 값 : “AB”',
				'4 MOD 2 → 결과 값 : 2',
			],
			correct: 4,
		},
	],
};

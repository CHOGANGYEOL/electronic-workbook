import IMAGES from './images';
import { VStack } from '../../../../components/Common';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const UC_2024_07: Question = {
	questionId: 202407,
	title: '2024 1차 모의고사',
	contents: [
		{
			contentId: 1,
			question: '다음 중 컴퓨터 통신에서 사용하는 프로토콜 기능에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'통신망에 전송되는 패킷의 흐름을 제어해서 시스템 전체의 안전성을 유지한다.',
				'정보를 전송하기 위해 송·수신기 사이에 같은 상태를 유지하도록 동기화 기능을 수행한다.',
				'데이터 전송 도중에 발생하는 오류를 검출한다.',
				'네트워크에 접속된 다양한 단말장치를 자동으로 인식하여 호환성을 제공한다.',
			],
			correct: 4,
		},
		{
			contentId: 2,
			question: '다음 중 한글 Windows 10의 [휴지통]에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'휴지통의 파일이 실제 저장된 폴더 위치는 일반적으로 C:\\$Recycle.Bin이다.',
				'휴지통 속성에서 파일이나 폴더가 삭제될 때마다 삭제 확인 대화상자가 표시되지 않도록 설정할 수 있다.',
				'휴지통에 지정된 최대 크기를 초과하면 보관된 파일 중 가장 용량이 큰 파일부터 자동 삭제된다.',
				'휴지통에 보관된 실행 파일은 복원은 가능하지만 휴지통에서 실행하거나 이름을 변경할 수는 없다.',
			],
			correct: 3,
		},
		{
			contentId: 3,
			question: '다음 중 컴퓨터 소프트웨어의 개발을 위한 객체지향 언어에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'데이터와 그 데이터를 처리하는 함수를 객체로 묶어서 문제를 해결하는 언어이다.',
				'대표적인 객체지향 언어로는 BASIC, Pascal, C언어 등이 있다.',
				'시스템의 확장성이 높고 정보 은폐가 용이하다.',
				'상속, 캡슐화, 추상화, 다형성 등을 지원한다.',
			],
			correct: 2,
		},
		{
			contentId: 4,
			question: '다음 중 인터넷 주소 체계에서 IPv6에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'128 비트의 주소를 사용하여 IPv4의 주소 부족 문제를 해결하였다.',
				'IPv4보다 주소의 길이가 길어 자료 전송 속도가 늦다.',
				'인증성, 기밀성, 데이터 무결성의 지원으로 보안 기능을 포함한다.',
				'IPv4와 호환성이 있으며, 실시간 흐름 제어가 가능하다.',
			],
			correct: 2,
		},
		{
			contentId: 5,
			question:
				'다음 중 컴퓨터의 하드디스크와 관련하여 RAID(Redundant Array of Inexpensive Disks) 기술에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'미러링(Mirroring)방식은 데이터를 두 개의 디스크에 동일하게 기록하여 한쪽 디스크의 데이터 손상 시 다른 한쪽 디스크를 이용하여 복구한다.',
				'스트라이핑(Striping) 방식은 데이터를 여러 개의 디스크에 나눠서 기록하는 방법으로 자료를 읽고 쓰는 시간을 단축할 수는 있다.',
				'한 개의 하드디스크를 여러 개의 하드디스크처럼 나누어 관리하는 기술이다.',
				'RAID를 이용하면 데이터의 안정성이 높아지며, 데이터 복구가 용이하다.',
			],
			correct: 3,
			description: 'RAID는 여러 개의 하드디스크를 한 개의 하드디스크처럼 관리하는 기술입니다.',
		},
		{
			contentId: 6,
			question: '다음 중 컴퓨터 운영체제의 운영방식에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'다중 처리(Multi-Processing) : 한 개의 CPU로 여러 개의 프로그램을 동시에 처리하는 방식이다.',
				'실시간 처리(Real Time Processing) : 처리할 데이터가 입력될 때마다 즉시 처리하는 방식으로, 각종 예약 시스템이나 은행 업무 등에서 사용한다.',
				'일괄 처리(Batch Processing) : 컴퓨터에 입력하는 데이터를 일정량 또는 일정시간 동안 모았다가 한꺼번에 처리하는 방식이다.',
				'시분할 시스템(Time Sharing System) : 한 대의 시스템을 여러 사용자가 동시에 사용하는 방식으로, 처리 시간을 짧은 시간 단위로 나누어 각 사용자에게 순차적으로 할당하여 실행한다.',
			],
			correct: 1,
		},
		{
			contentId: 7,
			question: '다음 중 NTFS 파일 시스템에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'파일 및 폴더에 대한 액세스 제어를 유지하고 제한된 계정을 지원한다.',
				'FAT32 파일 시스템보다 성능, 보안, 안전성이 높다.',
				'모든 디스크 드라이브에서 사용할 수 있는 범용 파일 시스템이다.',
				'파일 크기는 볼륨 크기에 의해서만 제한된다.',
			],
			correct: 3,
		},
		{
			contentId: 8,
			question:
				'다음 중 LAN에 연결된 컴퓨터에서 고정 IP 주소로 인터넷에 접속하기 위해 설정해야 할 인터넷 프로토콜(TCP/IP) 항목으로 옳지 않은 것은?',
			answer: ['게이트웨이 주소', '서브넷 마스크', 'IP 주소', 'DHCP 서버 주소'],
			correct: 4,
		},
		{
			contentId: 9,
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
			contentId: 10,
			question: '다음 중 Windows 10의 바로가기 키에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'[Alt]+[Esc]는 ‘시작’을 클릭한 것처럼 시작 메뉴를 표시한다.',
				'[Shift]+[F10]은 선택한 항목의 바로 가기 메뉴를 표시한다.',
				'바로가기 아이콘의 ‘속성’ 창에서 바로가기 키를 지정할 수 있다.',
				'[Alt]+[Enter]는 선택한 항목의 속성 대화상자를 호출한다.',
			],
			correct: 1,
		},
		{
			contentId: 11,
			question: '다음 중 네트워크의 구성(Topology)에서 망형(Mesh)에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'단말장치의 추가/제거 및 기밀 보호가 어렵다.',
				'모든 지점의 컴퓨터와 단말장치를 서로 연결한 형태이다.',
				'응답시간이 빠르고 노드의 연결성이 높다.',
				'통신회선 장애 시 다른 경로를 통하여 데이터 전송이 가능하다.',
			],
			correct: 1,
		},
		{
			contentId: 12,
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
			contentId: 13,
			question: '다음 중 컴퓨터의 연산장치에 있는 레지스터에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'2진수 덧셈을 수행하는 가산기(Adder)가 있다.',
				'뺄셈을 수행하기 위해 입력된 값을 보수로 변환하는 보수기(Complementor)가 있다.',
				'연산 결과를 일시적으로 저장하는 누산기(Accumulator)가 있다.',
				'연산에 사용될 데이터를 기억하는 상태 레지스터(Status Register)가 있다.',
			],
			correct: 4,
		},
		{
			contentId: 14,
			question:
				'다음 중 디지털 콘텐츠의 생성·거래·전달·관리 등 전체 과정을 관리할 수 있는 기술로 멀티미디어 프레임워크의 MPEG 표준은?',
			answer: ['MPEG-1', 'MPEG-3', 'MPEG-7', 'MPEG-21'],
			correct: 4,
		},
		{
			contentId: 15,
			question: '다음 중 VoIP에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'인터넷 IP 기술을 사용한 디지털 음성 전송 기술이다.',
				'보컬텍(VocalTec) 사의 인터넷폰으로 처음 소개되었으며, PC to PC, PC to Phone, Phone to Phone 방식으로 발전하였다.',
				'기존 회선교환 방식과 달리 네트워크를 통해 음성을 패킷형태로 전송한다.',
				'원거리 통화 시 PSTN(Public Switched Telephone Network)보다는 요금이 높지만 일정 수준의 통화 품질이 보장된다.',
			],
			correct: 4,
		},
		{
			contentId: 16,
			question: '다음 중 쿠키(Cookie)에 대한 설명으로 옳은 것은?',
			answer: [
				'인터넷 사용 시 네트워크에 접속하기 위한 프로그램이다.',
				'특정 웹 사이트 접속 시 반복적으로 사용되는 접속 정보를 가지고 있는 파일이다.',
				'웹 브라우저에서 기본으로 제공하지 않는 기능을 부가적으로 설치하여 구현되도록 한다.',
				'자주 사용하는 사이트의 자료를 저장한 후 다시 동일한 사이트 접속 시 자동으로 자료를 불러온다.',
			],
			correct: 2,
		},
		{
			contentId: 17,
			question: '다음 중 한글 Windows 10 바로 가기 아이콘의 [속성] 대화상자에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'대상 파일이나 대상 형식, 대상 위치 등에 관한 연결된 항목의 정보를 확인할 수 있다.',
				'연결된 항목을 바로 열 수 있는 바로 가기 키를 지정할 수 있다.',
				'연결된 항목의 디스크 할당 크기를 확인할 수 있다.',
				'바로 가기 아이콘을 만든 날짜와 수정한 날짜, 액세스한 날짜 등을 확인할 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 18,
			question: '다음 중 와이파이(Wi-Fi)에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'IEEE 802.11 기술 규격의 브랜드명으로 Wireless Fidelity의 약어이다.',
				'무선 신호를 전달하는 AP(Access Point)를 중심으로 데이터를 주고 받는 인프라스트럭쳐(Infrastructure) 모드와 AP 없이 데이터를 주고 받는 애드혹(Ad Hoc) 모드가 있다.',
				'유선 랜을 무선화한 것이기 때문에 사용 거리에 제한이 없고 전송속도가 3G 이동통신에 비해 느리며 전송비용이 고가이다.',
				'와이파이 6(Wi-Fi 6)은 다중 접속 환경에 최적화되어 공공 와이파이 환경에서도 최상의 네트워크 품질을 제공하는 것을 목적으로 고안된 규격이다.',
			],
			correct: 3,
		},
		{
			contentId: 19,
			question: '다음 중 시스템 소프트웨어에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'사용자가 컴퓨터를 이용하여 특정 업무를 처리할 수 있게 개발된 프로그램이다.',
				'시스템 소프트웨어는 제어 프로그램과 처리 프로그램으로 구분된다.',
				'컴퓨터 시스템을 효율적으로 운영해 주는 소프트웨어이다.',
				'컴퓨터와 사용자 사이에서 중계자 역할을 하는 소프트웨어이다.',
			],
			correct: 1,
		},
		{
			contentId: 20,
			question: '다음 중 바이러스에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'컴퓨터 하드웨어와 무관하게 소프트웨어에만 영향을 미친다.',
				'감염 부위에 따라 부트 바이러스와 파일 바이러스로 구분한다.',
				'사용자 몰래 스스로 복제하여 다른 프로그램을 감염시키고, 정상적인 프로그램이나 다른 데이터 파일 등을 파괴한다.',
				'주로 복제품을 사용하거나 통신 매체를 통하여 다운받은 프로그램에 의해 감염된다.',
			],
			correct: 1,
		},
		{
			contentId: 21,
			question: '다음 중 엑셀의 화면 설정에 대한 설명으로 옳은 것은?',
			answer: [
				'워크시트 화면의 확대/축소 배율 지정은 모든 시트에 같은 배율로 적용된다.',
				'틀 고정과 창 나누기를 동시에 수행할 수 있다.',
				'화면에 표시되는 틀 고정 형태는 인쇄 시 적용되지 않는다.',
				'틀 고정 구분선은 마우스 드래그로 위치를 변경할 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 22,
			question: '다음 중 시나리오에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'시나리오는 별도의 파일로 저장하고 자동으로 바꿀 수 있는 값의 집합이다.',
				'시나리오를 사용하여 워크시트 모델의 결과를 예측할 수 있다.',
				'여러 시나리오를 비교하기 위해 시나리오를 한 페이지의 피벗테이블로 요약할 수 있다.',
				'시나리오 피벗 테이블 보고서에는 결과 셀이 반드시 있어야 한다.',
			],
			correct: 1,
		},
		{
			contentId: 23,
			question: '다음 중 워크시트의 인쇄 영역 설정에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'인쇄 영역은 리본 메뉴 [페이지 레이아웃] 탭이나 [페이지 설정] 대화상자의 [시트] 탭에서 설정할 수 있다.',
				'인쇄 영역을 설정했더라도 인쇄 시 활성 시트 전체가 인쇄되도록 설정할 수 있다.',
				'여러 시트에서 원하는 영역을 추가하여 인쇄 영역을 확대할 수 있다.',
				'여러 영역이 인쇄 영역으로 설정된 경우 설정한 순서대로 각기 다른 페이지에 인쇄된다.',
			],
			correct: 3,
		},
		{
			contentId: 24,
			question: '다음 중 인쇄 기능에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'기본적으로 워크시트의 눈금선은 인쇄되지 않으나 인쇄되도록 설정할 수 있다.',
				'[페이지 설정] 대화상자의 [시트] 탭에서 ‘간단하게 인쇄’를 선택하면 셀의 테두리를 포함하여 인쇄할 수 있다.',
				'[인쇄 미리 보기 및 인쇄] 화면을 표시하는 단축키는 [Ctrl]+[F2]이다.',
				'[인쇄 미리 보기 및 인쇄]에서 ‘여백 표시’를 선택한 경우 마우스로 여백을 변경할 수 있다.',
			],
			correct: 2,
		},
		{
			contentId: 25,
			question: '다음 중 데이터 정렬에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'대/소문자를 구분하여 정렬할 수 있다.',
				'표 안에서 다른 열에는 영향을 주지 않고 선택한 한 열 내에서만 정렬하도록 할 수 있다.',
				'정렬 기준으로 ‘조건부 서식 아이콘’을 선택한 경우 기본 정렬 순서는 ‘위에 표시’이다.',
				'행을 기준으로 정렬하려면 [정렬] 대화상자의 [옵션]에서 정렬 옵션의 방향을 ‘위쪽에서 아래쪽’으로 선택한다.',
			],
			correct: 4,
		},
		{
			contentId: 26,
			question: '다음 중 아래의 워크시트에서 수식의 결과로 ‘부사장’을 출력하지 않는 것은?',
			questionBody: <img src={IMAGES.Img_26} />,
			answer: [
				'=CHOOSE(CELL(“row”, B3), C2, C3, C4, C5, C6)',
				'=CHOOSE(TYPE(B4), C2, C3, C4, C5, C6)',
				'=OFFSET(A1:A6, 2, 2, 1, 1)',
				'=INDEX(A2:D6,MATCH(A3, A2:A6, 0), 3)',
			],
			correct: 1,
		},
		{
			contentId: 27,
			question:
				'다음 중 아래 워크시트의 [A1] 셀에서 10.1을 입력한 후 [Ctrl]을 누르고 자동 채우기 핸들을 아래로 드래그한 경우 [A4] 셀에 입력되는 값은?',
			questionBody: <img src={IMAGES.Img_27} />,
			answer: ['10.1', '10.4', '13.1', '13.4'],
			correct: 3,
		},
		{
			contentId: 28,
			question:
				'다음 중 10,000,000원을 2년간 연 5.5%의 이자율로 대출할 때, 매월말 상환해야 할 불입액을 구하기 위한 수식으로 옳은 것은?',
			answer: [
				'=PMT(5.5%/12, 12*2, -10000000)',
				'=PMT(5.5%, 12*2, -10000000)',
				'=PMT(5.5%, 12*2, -10000000, 0, 1)',
				'=PMT(5.5%/12, 12*2, -10000000, 0, 1)',
			],
			correct: 1,
		},
		{
			contentId: 29,
			question: '다음 중 아래 차트에 대한 설명으로 옳지 않은 것은?',
			questionBody: <img src={IMAGES.Img_29} />,
			answer: [
				'[데이터 계열 서식] 대화상자에서 ‘계열 겹치기’ 값이 0보다 작게 설정되었다.',
				'‘A상표’ 계열에 선형 추세선이 추가되었고, ‘C상표’ 계열에는 데이터 레이블이 추가되었다.',
				'세로(값) 축의 기본 단위는 20이고, 최소값과 최대값은 각각 20과 100으로 설정되었다.',
				'기본 세로 축 제목은 ‘모든 텍스트 270도 회전’으로 “비타민 함유량”이 입력되었다.',
			],
			correct: 1,
		},
		{
			contentId: 30,
			question: '숫자 -24600을 입력한 후 아래의 표시 형식을 적용했을 때 표시되는 결과로 옳은 것은?',
			questionBody: <RequestBody>{'#0.0,“천원”;(#0.0,“천원”);0.0;@“님”'}</RequestBody>,
			answer: ['24.6천원', '24,600', '(-24.6천원)', '(24.6천원)'],
			correct: 4,
		},
		{
			contentId: 31,
			question:
				'다음은 [C3] 셀부터 [F3] 셀의 평균을 [G3] 셀에, 최대값을 [H3] 셀에 계산한 후 [G3:H3] 영역을 블록으로 지정하고 채우기 핸들을 [G10:H10] 영역까지 드래그하여 계산하는 매크로이다. 다음 중 괄호( ) 안에 해당하는 값으로 틀린 것은?',
			questionBody: (
				<RequestBody>
					{
						"Sub 매크로1( ) \n\tRange('G3').Select \n\tSelection.FormulaR1C1 = '( a )' \n\t\tRange('H3').Select \n\t\tSelection.FormulaR1C1 = '( b )' \n\t\tRange('G3:H3').Select \n\t\tSelection.( c ) :( d ), Type:=xlFillDefault \n\tRange('G3:H10').Select \nEnd Sub"
					}
				</RequestBody>
			),
			answer: ['b =MAX(RC[-5]:RC[-2])', 'a =AVERAGE(RC[-4]:RC[-1])', 'd =Range("G3:H10")', 'c Auto Destination'],
			correct: 4,
		},
		{
			contentId: 32,
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
			contentId: 33,
			question:
				'아래 시트에서 [A13:B15] 영역에 입력된 내용을 조건으로 고급 필터를 실행했을 때의 결과로 추출되는 데이터가 아닌 것은?',
			questionBody: <img src={IMAGES.Img_33} />,
			answer: [
				'상품명이 컴퓨터이고 금액이 60,000인 데이터',
				'상품명이 오디오이고 금액이 56,000인 데이터',
				'상품명이 비디오이고 금액이 30,000인 데이터',
				'상품명이 컴퓨터이고 금액이 30,000인 데이터',
			],
			correct: 1,
		},
		{
			contentId: 34,
			question: '다음 중 괄호( ) 안에 해당하는 바로 가기 키로 옳은 것은?',
			questionBody: (
				<RequestBody>
					{'통합 문서 내에서 ( ᄀ ) 키는 다음 워크시트로 이동, ( ᄂ ) 키는 이전 워크시트로 이동할 때 사용한다.'}
				</RequestBody>
			),
			answer: [
				'ᄀ [Shift]+[PgDn] ᄂ [Shift]+[PgUp]',
				'ᄀ [Ctrl]+[PgDn] ᄂ [Ctrl]+[PgUp]',
				'ᄀ [Ctrl]+[←] ᄂ [Ctrl]+[←]',
				'ᄀ [Shift]+[↑] ᄂ [Shift]+[↓]',
			],
			correct: 2,
		},
		{
			contentId: 35,
			question: '다음 중 ‘인쇄 미리 보기 및 인쇄’ 화면에서 ‘페이지 설정’을 클릭하여 설정할 수 있는 내용으로 틀린 것은?',
			answer: [
				'인쇄 영역을 설정하여 인쇄할 수 있다.',
				'워크시트의 행 머리글과 열 머리글을 포함하여 인쇄할 수 있다.',
				'워크시트에 삽입되어 있는 차트, 도형, 그림 등의 모든 그래픽 요소를 제외하고 텍스트만 빠르게 인쇄할 수 있다.',
				'셀에 표시된 오류가 인쇄되지 않도록 설정할 수 있다.',
			],
			correct: 1,
		},
		{
			contentId: 36,
			question:
				'아래 그림과 같이 워크시트에 배열 상수 형태로 배열 수식이 입력되어 있을 때, [A5] 셀에서 수식 =SUM(A1,B2)를 실행하였다. 다음 중 그 결과로 옳은 것은?',
			questionBody: <img src={IMAGES.Img_36} />,
			answer: ['3', '5', '6', '7'],
			correct: 2,
		},
		{
			contentId: 37,
			question: '다음 중 매크로 기록과 실행에 관련된 항목들의 설명으로 옳지 않은 것은?',
			answer: [
				'엑셀을 사용할 때마다 매크로를 사용할 수 있게 하려면 매크로 저장 위치를 ‘개인용 매크로 통합 문서’를 선택한다.',
				'[Alt]와 영문 문자를 조합하여 매크로의 바로 가기 키를 지정할 수 있다.',
				'매크로 기록 기능을 통해 작성된 매크로는 ‘VBA 편집기’에서 실행할 수 있다.',
				'매크로 기록 기능을 이용할 때 기본 저장 위치는 ‘현재 통합 문서’가 된다.',
			],
			correct: 2,
		},
		{
			contentId: 38,
			question:
				'다음 중 아래 그림과 같이 기간과 이율의 변화에 따른 월불입액을 계산하려고 한다. 이때 적용한 데이터 표의 내용으로 옳은 것은? (월불입액 계산 수식은 ‘=PMT(B3/12, B2*12, -B4)’임)',
			questionBody: <img src={IMAGES.Img_38} />,
			answer: [
				'입력값 : [행 입력 셀] : $B$2',
				'입력값 : [열 입력 셀] : $A$2',
				'입력값 : [행 입력 셀] : $B$2 [열 입력 셀] : $B$3',
				'입력값 : [행 입력 셀] : $B$3 [열 입력 셀] : $B$2',
			],
			correct: 3,
		},
		{
			contentId: 39,
			question: '다음 중 [페이지 레이아웃] 보기 상태에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'페이지 레이아웃 보기에서도 기본 보기와 같이 데이터 형식과 레이아웃을 변경할 수 있다.',
				'페이지 레이아웃 보기에서 표시되는 눈금자의 단위는 [Excel 옵션]의 ‘고급’ 범주에서 변경할 수 있다.',
				'마우스를 이용하여 페이지 여백과 머리글과 바닥글 여백을 조정할 수 있다.',
				'페이지 나누기를 조정하는 페이지 구분선을 마우스로 드래그하여 페이지 나누기를 빠르게 조정할 수 있다.',
			],
			correct: 4,
		},
		{
			contentId: 40,
			question: '다음 중 아래의 워크시트에서 <보기>의 프로시저 실행 결과로 옳은 것은?',
			questionBody: (
				<VStack $gap="1.2rem">
					<img src={IMAGES.Img_40} />
					<RequestBody>{'Sub B3선택() \n\tRange(“B3”).CurrentRegion.Select\nEnd Sub'}</RequestBody>
				</VStack>
			),
			answer: ['[B3] 셀이 선택된다.', '[A1:B3] 셀이 선택된다.', '[A1:C3] 셀이 선택된다.', '[A1:C7] 셀이 선택된다.'],
			correct: 4,
		},
		{
			contentId: 41,
			question: '데이터베이스를 이용할 경우 얻을 수 있는 장점으로 틀린 것은?',
			answer: [
				'데이터의 보안성을 유지할 수 있다.',
				'데이터 관리 비용 및 데이터 저장 공간을 절약할 수 있다.',
				'데이터의 논리적, 물리적인 독립성이 유지된다.',
				'데이터의 무결성이 유지된다.',
			],
			correct: 2,
		},
		{
			contentId: 42,
			question: '다음 중 실행 쿼리에 대한 설명으로 틀린 것은?',
			answer: [
				'실행 쿼리에는 DELETE, UPDATE, INSERT, SELECT 등이 있다.',
				'DELETE는 테이블의 레코드를 삭제할 때 사용한다.',
				'UPDATE는 테이블의 필드 값을 변경할 때 사용한다.',
				'INSERT는 테이블에 레코드를 추가할 때 사용한다.',
			],
			correct: 1,
		},
		{
			contentId: 43,
			question:
				'테이블은 데이터를 저장하고 관리하는 것으로, 데이터베이스에서 가장 기본이 되는 개체이다. 다음 중 테이블을 작성할 때 고려하지 않아도 될 사항은?',
			answer: ['필드의 데이터 형식', '레코드 수', '해당 필드에 입력할 데이터의 조건', '필드 이름'],
			correct: 2,
		},
		{
			contentId: 44,
			question: '다음 중 입력 마스크의 속성에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'첫 번째 부분은 사용자 지정 기호를 사용하여 입력 마스크를 지정한다.',
				'두 번째 부분은 데이터를 입력할 때 ‘-, /, =’와 같은 서식 문자를 테이블에 저장할지의 여부를 지정한다.',
				'세 번째 부분은 데이터를 입력할 때 데이터가 입력되어야 하는 자리에 표시되는 문자를 지정한다.',
				'입력 마스크는 콜론(:)으로 나눈 세 개의 부분으로 구성된다.',
			],
			correct: 4,
		},
		{
			contentId: 45,
			question: '다음 중 데이터베이스를 생성하거나 수정하는 데 사용되는 데이터 정의문(DDL)이 아닌 것은?',
			answer: ['CREATE', 'INSERT', 'ALTER', 'DROP'],
			description: 'INSERT는 데이터 조작어(DML)입니다.',
			correct: 2,
		},
		{
			contentId: 46,
			question:
				'“부서” 테이블과 “사원정보” 테이블에 대해 다음 그림과 같이 관계를 설정한 경우에 대한 설명으로 옳지 않은 것은?',
			questionBody: <img src={IMAGES.Img_46} />,
			answer: [
				'“부서” 테이블에 없는 ‘부서코드’는 “사원정보” 테이블의 ‘부서코드’ 필드에 입력할 수 없다.',
				'“사원정보” 테이블의 ‘부서코드’를 변경하면 여기서 참조하는 “부서” 테이블의 ‘부서코드’가 변경된다.',
				'“사원정보” 테이블에서 참조하고 있는 “부서” 테이블의 ‘부서코드’는 삭제할 수 없다.',
				'“사원정보” 테이블에서 참조하고 있는 “부서” 테이블의 ‘부서코드’를 변경할 수 있다.',
			],
			correct: 2,
		},
		{
			contentId: 47,
			question: '<학생현황> 테이블에 있는 학년을 검색하되, 중복된 값은 표시되지 않게 하는 질의로 올바른 것은?',
			answer: [
				'Select 학년 From 학생현황;',
				'Select Distinct 학년 From 학생현황;',
				'Select 학년 Distinct From 학생현황;',
				'Select 학년 From 학생현황 Distinct;',
			],
			correct: 2,
		},
		{
			contentId: 48,
			question: '테이블을 만드는 방법으로 옳지 않은 것은?',
			answer: [
				'[만들기] 탭에서 [테이블 디자인]을 클릭하면 필드와 형식을 만들고 데이터시트 보기에서 데이터를 입력하면서 테이블을 만들 수 있다.',
				'[외부 데이터] 탭에서 다양한 형식의 데이터를 가져오거나 테이블에 연결하여 만들 수 있다.',
				'[테이블 마법사]를 이용하면 데이터 구조가 이미 정의된 테이블에 데이터를 입력하면서 테이블을 만들 수 있다.',
				'[만들기] 탭에서 [테이블]을 클릭하면 필드와 데이터를 입력하면서 테이블을 만들 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 49,
			question:
				'판매(제품번호, 제품명, 판매량) 테이블에서 제품 수가 총 몇 개인지를 알아보기 위한 질의문으로 옳은 것은?',
			answer: [
				'Insert Sum(*) As 제품수 From 판매;',
				'Insert Count(*) As 제품수 From 판매;',
				'Select Sum(*) As 제품수 From 판매;',
				'Select Count(*) As 제품수 From 판매;',
			],
			correct: 4,
		},
		{
			contentId: 50,
			question: '다음 중 테이블에서 입력 마스크를 “LA09?”로 설정한 경우 입력할 수 없는 값은?',
			answer: ['AA111', 'A11', 'AA11', 'A111A'],
			description: '“LA09?”에서 “?”는 A~Z까지의 영문자와 한글만 입력 가능 하므로 “AA111”은 입력할 수 없습니다.',
			correct: 1,
		},
		{
			contentId: 51,
			question:
				'데이터 형식이 텍스트인 필드에 다음과 같이 형식을 지정한 후 값을 입력했을 때의 결과가 올바르게 표시된 것은? (형식, 입력값, 결과)',
			answer: ['@@@-@@@, 123456, 123-456', '@*_, abc, abc*_', '@&@&@, 123, 123', '>>->>, abde, AB-DE'],
			correct: 1,
		},
		{
			contentId: 52,
			question: '쿼리를 실행할 때마다 값이나 패턴을 묻는 메시지를 표시하여 조건에 맞는 필드만 반환하는 쿼리는?',
			answer: ['크로스탭 쿼리', '매개 변수 쿼리', '추가 쿼리', '업데이트 쿼리'],
			correct: 2,
		},
		{
			contentId: 53,
			question: '다음에 표시된 ‘페이지 설정’ 대화상자에 대한 설명으로 옳지 않은 것은?',
			questionBody: <img src={IMAGES.Img_53} />,
			answer: [
				'‘페이지 설정’ 대화상자를 표시하려면 인쇄 미리 보기 상태에서 [인쇄 미리 보기]→[페이지 레이아웃]→[페이지 설정]을 클릭하면 된다.',
				'여러 열로 구성된 보고서나 레이블을 인쇄할 때 열의 크기를 조정하려면 ‘열’ 탭에서 열 크기를 지정한다.',
				'윈도우 제어판에서 지정한 기본 프린터로 출력하려면 ‘페이지’ 탭에서 ‘기본 프린터’를 선택한다.',
				'‘데이터만 인쇄’ 옵션을 선택하면 레이블과 컨트롤의 테두리, 눈금선이나 선, 사각형과 같은 그래픽 요소들도 함께 출력된다.',
			],
			correct: 4,
		},
		{
			contentId: 54,
			question:
				'명령 단추는 레코드를 찾거나 레코드 인쇄 등의 특정 기능을 실행할 때 사용하는 컨트롤입니다. 다음 중 명령 단추 마법사에서 레코드 탐색을 선택했을 때 사용할 수 없는 매크로 함수는 무엇인가?',
			answer: ['다음 레코드로 이동', '이전 찾기', '마지막 레코드로 이동', '이전 레코드로 이동'],
			correct: 2,
		},
		{
			contentId: 55,
			question: '컨트롤의 주요 속성 중 데이터 속성에 관한 설명으로 잘못된 것은?',
			answer: [
				'컨트롤 원본 : 컨트롤에 연결할 데이터를 지정한다.',
				'유효성 검사 규칙 : 텍스트 상자 컨트롤에 입력할 값의 형식이나 서식을 설정한다.',
				'사용 가능 : 컨트롤에 포커스를 이동시킬 수 있는지의 여부를 설정한다.',
				'기본값 : 새 레코드가 추가될 때 컨트롤에 기본적으로 입력될 값을 설정한다.',
			],
			description: (
				<ul>
					<li>
						유효성 검사 규칙은 컨트롤에 입력할 데이터의 종류나 범 위를 지정하여 입력 데이터의 합법성 여부를 설정합니다.
					</li>
					<li>텍스트 상자 컨트롤에 입력할 값의 형식이나 서식을 설정 하는 것은 입력 마스크입니다.</li>
				</ul>
			),
			correct: 2,
		},
		{
			contentId: 56,
			question: '보고서 영역에서 실제 데이터가 반복적으로 표시되는 영역은 어디인가?',
			answer: ['본문 영역', '보고서 바닥글', '보고서 머리글', '페이지 바닥글'],
			correct: 1,
		},
		{
			contentId: 57,
			question: '다음의 모듈에 대한 설명으로 가장 옳지 않은 것은?',
			questionBody: (
				<RequestBody>{'Private Sub Form_Load( )\n\tMsgBox Me.Name & “ 폼을 엽니다.”\nEnd Sub'}</RequestBody>
			),
			answer: [
				'서브 루틴의 이름은 Form_Load이다.',
				'폼을 디자인 보기로 열 때 자동적으로 실행된다.',
				'폼 이름이 ‘회원목록’이면 “회원목록 폼을 엽니다.”라는 메시지를 표시한다.',
				'폼의 이름을 바꾸거나 폼을 복사하여도 동일한 기능을 수행한다.',
			],
			correct: 2,
		},
		{
			contentId: 58,
			question: '다음은 우편물 레이블 보고서에 대한 설명이다. 틀린 설명은?',
			answer: [
				'우편 발송을 위한 레이블을 생성하는 기능이다.',
				'두 개 이상의 테이블/쿼리의 내용을 한 번에 보고서에 출력할 수 없다.',
				'우편물 레이블 마법사를 이용하여 보고서를 작성한다.',
				'우편물 레이블 마법사에 지정된 형식의 레이블만을 만들 수 있다.',
			],
			correct: 4,
		},
		{
			contentId: 59,
			question:
				'다음 중 보고서 작성 시 특정한 조건에 만족되는 경우에만 서식이 적용되도록 하는 조건부 서식에 대한 설명으로 틀린 것은?',
			answer: [
				'조건을 지정할 때 만능 문자(*, ?)를 사용하여 텍스트나 숫자를 나타낼 수는 없다.',
				'[디자인 보기] 상태에서 컨트롤을 선택한 후 [서식] → [컨트롤 서식] → [조건부 서식]을 통해 설정할 수 있다.',
				'한 번 지정된 조건부 서식은 컨트롤 값이 변경되어 조건에 만족하지 않아도 그대로 유지된다.',
				'조건은 50개까지 지정할 수 있으며, 조건별로 다른 서식을 적용할 수 있다.',
			],
			correct: 3,
		},
		{
			contentId: 60,
			question: '다음 중 텍스트 상자의 내용이 변경될 때 발생하는 이벤트는 무엇인가?',
			answer: ['After Update', 'Before Update', 'Click', 'Change'],
			correct: 4,
		},
	],
};

import { Question } from '../types';

export default <Question>{
	questionId: 1,
	createAt: 2020,
	order: 1,
	contents: [
		{
			contentIdx: 1,
			question: '다음 중 사운드의 압축 및 복원과 관련된 기술에 해당하지 않는 것은?',
			answer: ['FLAC', 'AIFF', 'H.264', 'WAV'],
			correct: 3,
		},
		{
			contentIdx: 2,
			question:
				'다음 중 컴퓨터 게임이나 컴퓨터 기반 훈련과 같이 사용자와의 상호작용을 통해 진행 상황을 제어하는 멀티미디어의 특징을 나타내는 용어는?',
			answer: ['선형 콘텐츠', '비선형 콘텐츠', 'VR 콘텐츠', '4D 콘텐츠'],
			correct: 2,
		},
		{
			contentIdx: 3,
			question: '다음 중 정보 보안을 위한 비밀키 암호화 기법에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'비밀키 암호화 기법의 안전성은 키의 길이 및 키의 비밀성 유지 여부에 영향을 많이 받는다.',
				'암호화와 복호화 시 사용하는 키가 동일한 암호화 기법 이다.',
				'복잡한 알고리즘으로 인해 암호화와 복호화 속도가 느리다.',
				'사용자가 증가할 경우 상대적으로 관리해야 할 키의 수가 많아진다.',
			],
			correct: 3,
		},
		{
			contentIdx: 4,
			question: '다음 중 분산 서비스 거부 공격(DDos)에 관한 설명으로 옳은 것은?',
			answer: [
				'네트워크 주변을 돌아다니는 패킷을 엿보면서 계정과 패스워드를 알아내는 행위',
				'검증된 사람이 네트워크를 통해 데이터를 보낸 것처럼 데이터를 변조하여 접속을 시도하는 행위',
				'여러 대의 장비를 이용하여 특정 서버에 대량의 데이터를 집중적으로 전송함으로써 서버의 정상적인 동작을 방해 하는 행위',
				'키보드의 키 입력시 캐치 프로그램을 사용하여 ID나 암호 정보를 빼내는 행위',
			],
			correct: 3,
		},
		{
			contentIdx: 5,
			question: '다음 중 VoIP에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'인터넷 IP 기술을 사용한 디지털 음성 전송 기술이다.',
				'원거리 통화 시 PSTN(public switched telephone network) 보다는 요금이 높지만 일정 수준의 통화 품질이 보장된다.',
				'기존 회선교환 방식과 달리 네트워크를 통해 음성을 패킷형태로 전송한다.',
				'보컬텍(VocalTec)사의 인터넷폰으로 처음 소개되었으며, PC to PC, PC to Phone, Phone to Phone 방식으로 발전하였다.',
			],
			correct: 2,
		},
		{
			contentIdx: 6,
			question:
				'다음 중 대량의 데이터 안에서 일정한 패턴을 찾아내고, 이로부터 가치 있는 정보를 추출해내는 기술을 의미하는 것은?',
			answer: [
				'데이터 웨어하우스(Data Warehouse)',
				'데이터 마이닝(Data Mining)',
				'데이터 마이그레이션(Data Migration)',
				'메타데이터(Metadata)',
			],
			correct: 2,
		},
		{
			contentIdx: 7,
			question: '다음 중 네트워크 프로토콜(Protocol)의 기능에 해당하지 않는 것은?',
			answer: [
				'패킷 수를 조정하는 흐름 제어 기능',
				'송/수신기를 같은 상태로 유지하는 동기화 기능',
				'데이터 전송 도중에 발생하는 에러 검출 기능',
				'네트워크 기반 하드웨어 연결문제 해결 기능',
			],
			correct: 4,
		},
		{
			contentIdx: 8,
			question:
				'다음 중 인터넷 서버까지의 경로를 추적하는 명령어인 ‘Tracert’의 실행 결과에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'IP 주소, 목적지까지 거치는 경로의 수, 각 구간 사이의 데이터 왕복 속도를 확인할 수 있다.',
				'특정 사이트가 열리지 않을 때 해당 서버가 문제인지 인터넷 망이 문제인지 확인할 수 있다.',
				'인터넷 속도가 느릴 때 어느 구간에서 정체를 일으키는지 확인할 수 있다.',
				'현재 자신의 컴퓨터에 연결된 다른 컴퓨터의 IP 주소나 포트 정보를 확인할 수 있다.',
			],
			correct: 4,
		},
		{
			contentIdx: 9,
			question: '다음 중 IPv6 주소에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'16비트씩 8부분으로 총 128비트로 구성된다.',
				'각 부분은 10진수로 표현되며, 세미콜론(;)으로 구분한다. ',
				'주소체계는 유니캐스트, 멀티캐스트, 애니캐스트로 나누어진다.',
				'실시간 흐름 제어로 향상된 멀티미디어 기능을 지원한다.',
			],
			correct: 2,
		},
		{
			contentIdx: 10,
			question: '다음 중 객체지향 프로그래밍 특징으로 옳은 것은?',
			answer: [
				'객체에 대하여 절차적 프로그래밍의 장점을 사용할 수 있다.',
				'객체지향 프로그램은 주로 인터프리터 번역 방식을 사용한다.',
				'객체지향 프로그램은 코드의 재사용과 유지보수가 용이 하다.',
				'프로그램의 구조와 절차에 중점을 두고 작업을 진행한다.',
			],
			correct: 3,
		},
		{
			contentIdx: 11,
			question: '다음 중 ASCII 코드에 대한 설명으로 옳지 않은 것은?',
			answer: [
				'3개의 Zone 비트와 4개의 Digit 비트로 하나의 문자를 표현한다.',
				'데이터 통신용으로 사용하며, 128가지 문자를 표현할 수 있다.',
				'2비트의 에러 검출 및 1비트의 에러 교정 비트를 포함 한다.',
				'확장 ASCII 코드는 8비트를 사용하여 문자를 표현한다.',
			],
			correct: 3,
		},
		{
			contentIdx: 12,
			question:
				'다음 중 하나의 컴퓨터에 여러 개의 중앙처리장치를 설치하여 주기억장치나 주변장치들을 공유하여 신뢰성과 연산능력을 향상시키는 시스템은?',
			answer: [
				'시분할 처리 시스템(Time Sharing System)',
				'다중 프로그래밍 시스템(Multi-Programming System)',
				'듀플렉스 시스템(Duplex System)',
				'다중 처리 시스템(Multi-Processing System)',
			],
			correct: 4,
		},
		{
			contentIdx: 13,
			question: '다음 중 CPU의 제어장치를 구성하는 레지스터에 관한 설명으로 옳지 않은 것은?',
			answer: [
				'프로그램 카운터: 프로그램의 실행된 명령어의 개수를 계산한다.',
				'명령 레지스터: 현재 실행 중인 명령을 기억한다.',
				'부호기: 해독된 명령에 따라 각 장치로 보낼 제어 신호를 생성한다.',
				'메모리 주소 레지스터: 기억장치에 입출력되는 데이터의 번지를 기억한다.',
			],
			correct: 1,
		},
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 3,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 2,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 1,
		//
		// },
		// {
		// 	question: '',
		// 	answer: [],
		// 	correct: 4,
		//
		// },
	],
};

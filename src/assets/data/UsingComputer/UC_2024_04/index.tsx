import { VStack } from '../../../../components/Common';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';

export const UC_2024_04: Question = {
	questionId: 202404,
	title: '2024대비 종류나순서문제10선',
	contents: [
		{
			contentId: 1,
			question:
				'다음 중 인터넷에서 사용하는 표준 주소 체계인 URL(Uniform Resource Locator)의 4가지 구성 요소를 순서대로 옳게 나열한 것은?',
			answer: [
				'프로토콜, 서버 주소, 포트 번호, 파일 경로',
				'서버 주소, 프로토콜, 포트 번호, 파일 경로',
				'프로토콜, 서버 주소, 파일 경로, 포트 번호',
				'포트 번호, 프로토콜, 서버 주소, 파일 경로',
			],
			correct: 1,
			description: 'URL의 구성 요소 순서: 프로토콜 → 서버 주소 → 포트 번호 → 파일 경로',
		},
		{
			contentId: 2,
			question:
				'다음 중 LAN에 연결된 컴퓨터에서 고정 IP 주소로 인터넷에 접속하기 위해 설정해야 할 인터넷 프로토콜(TCP/IP) 항목으로 옳지 않은 것은?',
			answer: ['게이트웨이 주소', '서브넷 마스크', 'IP 주소', 'DHCP 서버 주소'],
			correct: 4,
			description: (
				<VStack>
					TCP/IP의 구성 요소:
					<ul>
						<li>IP 주소</li>
						<li>서브넷 접두사 길이</li>
						<li>서브넷 마스크</li>
						<li>게이트웨이</li>
						<li>DNS 서버 주소</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 3,
			question: '다음 중 컴퓨터 통신에서 사용하는 프록시(Proxy) 서버의 기능으로 옳은 것은?',
			answer: [
				'네트워크 병목현상 해결 기능',
				'FTP 프로토콜 연결 해제 기능',
				'방화벽 기능과 캐시 기능',
				'내부 불법 해킹 차단 기능',
			],
			correct: 3,
			description: (
				<VStack>
					프록시 서버의 기능
					<ul>
						<li>방화벽 기능</li>
						<li>캐시 기능</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 4,
			question: '다음 중 데이터베이스 설계 순서로 옳은 것은?',
			questionBody: (
				<RequestBody>
					<ol style={{ listStyle: 'hangul-consonant' }}>
						<li>요구 조건 분석</li>
						<li>물리적 설계</li>
						<li>개념적 설계</li>
						<li>구현</li>
						<li>논리적 설계</li>
					</ol>
				</RequestBody>
			),
			answer: ['ᄃ→ᄀ→ᄆ→ᄅ→ᄂ', 'ᄀ→ᄃ→ᄆ→ᄂ→ᄅ', 'ᄃ→ᄆ→ᄂ→ᄀ→ᄅ', 'ᄀ→ᄆ→ᄃ→ᄂ→ᄅ'],
			correct: 2,
			description: '데이터베이스 설계 순서: 요구 조건 분석 → 개념적 설계 → 논리적 설계 → 물리적 설계 → 구현',
		},
		{
			contentId: 5,
			question: '다음 중 시스템의 정보 보안을 위한 기본 충족 요건에 해당하지 않는 것은?',
			answer: ['무결성', '기밀성', '확장성', '부인 방지'],
			correct: 3,
			description: (
				<VStack $gap="1rem">
					정보 보안의 충족 요건:
					<ul>
						<li>기밀성(Confidentiality)</li>
						<li>무결성(Integrity)</li>
						<li>가용성(Availability)</li>
						<li>인증(Authentication)</li>
						<li>부인 방지(Non Repudiation)</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 6,
			question: '다음 중 컴퓨터의 CMOS에서 설정할 수 있는 항목으로 옳지 않은 것은?',
			answer: ['시스템 날짜와 시간', '칩셋 설정', '부팅 순서', 'Windows 로그인 암호 변경'],
			correct: 4,
			description: (
				<VStack $gap="1rem">
					CMOS에서 설정 가능한 항목:
					<ul>
						<li>시스템의 날짜와 시간</li>
						<li>전원 관리</li>
						<li>하드디스크 타입(Type)</li>
						<li>PnP</li>
						<li>부팅 순서</li>
						<li>시스템 암호</li>
						<li>칩셋</li>
						<li>Anti-Virus 기능</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 7,
			question: '다음 중 테이블에서 내보내기가 가능한 파일 형식에 해당하지 않는 것은?',
			answer: ['엑셀(Excel) 파일', 'ODBC 데이터베이스', 'HTML 문서', 'Outlook'],
			correct: 4,
			description:
				'테이블에서 내보내기가 가능한 파일 형식: Excel, Access, 텍스트, XML, ODBC 데이터베이스, HTML, dBASE, Sharepoint, Word RTF, PDF/XPS, Word 병합',
		},
		{
			contentId: 8,
			question: '다음 중 mp3 파일의 크기를 결정하는 요소에 해당하지 않는 것은?',
			answer: ['재생 방식(Mono, Stereo)', '샘플 크기(Bit)', '프레임 너비(Pixel)', '표본 추출률(Hz)'],
			correct: 3,
			description: (
				<VStack $gap="1rem">
					오디오 데이터 파일 크기 결정 요소:
					<ul>
						<li>표본 추출률(Hz)</li>
						<li>샘플 크기(Bit)</li>
						<li>시간(Time)</li>
						<li>재생 방식(Mono=1, Stereo=2)</li>
					</ul>
				</VStack>
			),
		},
		{
			contentId: 9,
			question: '다음 중 기본키(Primary Key)로 설정할 수 없는 데이터 형식은 무엇인가?',
			answer: ['일련 번호', 'Yes/No', '하이퍼링크', '첨부 파일'],
			correct: 4,
			description: '기본키로 설정할 수 없는 데이터 형식: OLE 개체, 첨부 파일, 계산',
		},
		{
			contentId: 10,
			question: '다음 중 특정 폼을 [내보내기]를 통해 다른 형식으로 바꾸어 저장하려고 할 때 지정할 수 없는 형식은?',
			answer: ['HTML', '텍스트', 'Excel', 'JPEG'],
			correct: 4,
			description: '폼에서 내보내기가 가능한 파일 형식: Access, Excel, 텍스트, XML, HTML, Word RTF, PDF/XPS',
		},
	],
};

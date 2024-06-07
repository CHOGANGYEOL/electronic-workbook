import { VStack } from '../../../../components/Common';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';
import IMAGES from '../UC_2020_01/images';

export const MOCK_QUESTION: Question = {
	questionId: 1,
	title: '테스트 데이터',
	contents: [
		{
			contentId: 48,
			question: '다음 중 아래 <학생> 테이블에 대한 SQL 문의 실행 결과로 옳은 것은?',
			questionBody: (
				<VStack $gap="1.2rem">
					<img src={IMAGES.Img_48} />
					<RequestBody>
						SELECT AVG([나이]) FROM 학생 WHERE 학년=&quot;SN&quot; GROUP BY 전공 HAVING COUNT(*) {'>'}= 2;
					</RequestBody>
				</VStack>
			),
			answer: ['21', '22', '23', '24'],
			correct: 4,
		},
	],
};

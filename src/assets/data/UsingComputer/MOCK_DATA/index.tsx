import { VStack } from '../../../../components/Common';
import RequestBody from '../../../../feature/Question/components/RequestBody';
import { Question } from '../../types';
import IMAGES from '../UC_2020_02/images';

export const MOCK_QUESTION: Question = {
	questionId: 3,
	createAt: 1000,
	order: 1,
	contents: [
		{
			contentIdx: 51,
			question: '다음 중 주어진 [Customer] 테이블을 참조하여 아래의 SQL문을 실행한 결과로 옳은 것은?',
			questionBody: (
				<VStack $gap="1.2rem">
					<RequestBody>
						SELECT Count(*)
						<br />
						FROM (SELECT Distinct City From Customer);
					</RequestBody>
					<img src={IMAGES.Img_51} />
				</VStack>
			),
			answer: ['3', '5', '7', '9'],
			correct: 2,
		},
	],
};

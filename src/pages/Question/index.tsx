import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { HStack, VStack } from '../../components/Common';
import Article from '../../components/Common/Article';
import Title from '../../components/Common/Title';
import context from '../../context';
import Complete from '../../feature/Question/Complete';
import Content from '../../feature/Question/Content';
import useQuestion from '../../feature/Question/useQuestion';
import { HEADER_HEIGHT } from '../../layout/Header/const';

const Question = () => {
	const { question } = context.detail.useState();

	const questionData = useQuestion();
	const { count, isComplete, history } = questionData;

	if (!question) {
		return <Navigate to={'/'} />;
	} else {
		return (
			<VStack $gap="2.4rem" $flex="1">
				<Title>
					{question.createAt}년 - {question.order.toString().padStart(2, '0')}회차
				</Title>
				<Article
					$css={css`
						flex: 1;
					`}
				>
					<VStack $gap="2.4rem">
						<Counter $justifyContent="flex-end" $gap="0.4rem">
							점수 : <span className="count">{count}</span> / <span className="total">{question.total}</span>
						</Counter>
						{!isComplete ? <Content {...{ questionData }} /> : <Complete {...{ history }} />}
					</VStack>
				</Article>
			</VStack>
		);
	}
};

const Counter = styled(HStack)`
	.count {
		font-weight: 600;
	}
	.total {
		color: ${({ theme }) => theme.colors.primary[600]};
		font-weight: 600;
	}
	padding: 1.2rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
	position: sticky;
	top: ${HEADER_HEIGHT};
	background-color: ${({ theme }) => theme.colors.white};
`;

export default Question;

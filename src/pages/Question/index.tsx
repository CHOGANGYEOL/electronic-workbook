import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { HStack, VStack } from '../../components/Common';
import Article from '../../components/Common/Article';
import Title from '../../components/Common/Title';
import context from '../../context';
import ArticleTitle from '../../feature/Question/components/ArticleTitle';
import Complete from '../../feature/Question/components/Complete';
import Content from '../../feature/Question/components/Content';
import Progress from '../../feature/Question/components/Progress';
import useQuestion from '../../feature/Question/useQuestion';

const Question = () => {
	const { question, data } = context.detail.useState();

	const questionData = useQuestion(question);
	const { count, isComplete, history } = questionData;

	if (!question || !data) return <Navigate to={'/'} />;

	return (
		<VStack $gap="2.4rem" $flex="1">
			<Title>{data.title}</Title>
			<Article
				$css={css`
					flex: 1;
				`}
			>
				<VStack $gap="2.4rem">
					<ArticleTitle>
						<HStack $justifyContent="space-between">
							<Label>
								{question.createAt}년 - {question.order.toString().padStart(2, '0')}회차
							</Label>
							{!isComplete ? (
								<Progress total={question.contents.length} current={history.length} />
							) : (
								<Counter $justifyContent="flex-end" $gap="0.4rem">
									점수 : <span className="count">{count}</span> /{' '}
									<span className="total">{question.total ?? question.contents.length}</span>
								</Counter>
							)}
						</HStack>
					</ArticleTitle>
					{!isComplete ? <Content {...{ questionData }} /> : <Complete {...{ history }} />}
				</VStack>
			</Article>
		</VStack>
	);
};

const Label = styled.label`
	padding: 0.4rem 1.2rem;
	background-color: ${({ theme }) => theme.colors.primary[500]};
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.font.body[2]};
`;

const Counter = styled(HStack)`
	font-weight: 400;
	span {
		font-weight: 600;
	}
	.count {
		color: ${({ theme }) => theme.colors.primary[500]};
	}
`;

export default Question;

import { FormEvent, useCallback } from 'react';

import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Button } from '../../components/Button';
import { HStack, VStack } from '../../components/Common';
import Article from '../../components/Common/Article';
import List from '../../components/Common/List';
import Title from '../../components/Common/Title';
import context from '../../context';
import useQuestion from '../../feature/Question/useQuestion';

const Question = () => {
	const { question } = context.detail.useState();

	const { count, content, currentIdx, onSelect, selectIdx, setSelectIdx, handleConfirm, isConfirm } = useQuestion();

	const onSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			onSelect();
		},
		[selectIdx],
	);

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
						{content && (
							<Content {...{ onSubmit }}>
								<HStack $gap="1.2rem">
									<ItemHead>
										{currentIdx + 1}. {content.question}
									</ItemHead>
									{content.questionBody}
								</HStack>
								<List
									$hasBorder={false}
									items={content.answer}
									renderItem={(item, idx) => (
										<Item
											onClick={() => {
												setSelectIdx(idx);
											}}
											$isActive={selectIdx === idx}
											$isCorrect={isConfirm && content.correct === idx}
											$isWrong={isConfirm && selectIdx === idx}
										>
											{(idx + 1).toString()}. {item}
										</Item>
									)}
								/>
								<HStack $gap="1.2rem" $justifyContent="flex-end">
									<Button
										$buttonType="LINE"
										onClick={() => {
											handleConfirm();
										}}
									>
										정답 확인
									</Button>
									<Button $padding="0 2.4rem" type="submit">
										다음
									</Button>
								</HStack>
							</Content>
						)}
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
	padding-bottom: 1.2rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
`;

const Content = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

const ItemHead = styled.h4`
	${({ theme }) => theme.font.title[2]}
`;

const Item = styled.p<{ $isActive: boolean; $isCorrect: boolean; $isWrong: boolean }>`
	${({ theme }) => theme.font.body[1]}
	${({ $isActive }) =>
		$isActive &&
		css`
			font-weight: 600;
		`}
	${({ $isWrong, theme }) =>
		$isWrong &&
		css`
			color: ${theme.colors.red[500]};
		`}
	${({ $isCorrect, theme }) =>
		$isCorrect &&
		css`
			color: ${theme.colors.blue[500]};
			font-weight: 600;
		`}
`;

export default Question;

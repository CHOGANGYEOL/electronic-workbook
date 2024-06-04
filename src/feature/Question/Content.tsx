import { FormEvent, useCallback } from 'react';

import styled from 'styled-components';

import Item from './Item';
import useQuestion from './useQuestion';
import { Button } from '../../components/Button';
import { HStack } from '../../components/Common';

const Content = ({ questionData }: { questionData: ReturnType<typeof useQuestion> }) => {
	const { content, onSelect, selectIdx, setSelectIdx, handleConfirm, isConfirm, isLast } = questionData;

	const onSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			onSelect();
		},
		[selectIdx],
	);
	if (!content) return '데이터가 없습니다.';

	return (
		<Form {...{ onSubmit }}>
			<Item
				content={content}
				condition={{
					active: (_, idx) => {
						return selectIdx === idx;
					},
					correct: (_, idx) => {
						return isConfirm && content.correct === idx + 1;
					},
					wrong: (_, idx) => {
						return isConfirm && selectIdx === idx;
					},
				}}
				onItemClick={(_, idx) => {
					setSelectIdx(idx);
				}}
			/>
			<HStack $gap="1.2rem" $justifyContent="flex-end">
				<Button
					$buttonType="LINE"
					$color={!isConfirm ? 'PRIMARY' : 'TERTIARY'}
					onClick={() => {
						handleConfirm();
					}}
				>
					{!isConfirm ? '정답 확인' : '되돌리기'}
				</Button>
				<Button $padding="0 2.4rem" type="submit" disabled={!selectIdx}>
					{isLast ? '결과' : '다음'}
				</Button>
			</HStack>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;
export default Content;

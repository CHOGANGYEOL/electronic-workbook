import { FormEvent, useCallback } from 'react';

import styled from 'styled-components';

import Item from './Item';
import { Button } from '../../../components/Button';
import { HStack, VStack } from '../../../components/Common';
import Divide from '../../../components/Common/Divide';
import useQuestion from '../useQuestion';

const Content = ({ questionData }: { questionData: ReturnType<typeof useQuestion> }) => {
	const {
		content,
		onSelect,
		selectIdx,
		handleSelectIdx,
		handleConfirm,
		isConfirm,
		isLast,
		handleClose,
		isDescOpen,
		handleDescOpen,
	} = questionData;

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
					handleSelectIdx(idx);
				}}
			/>

			<Divide />
			<VStack $gap="1.2rem">
				<HStack $gap="1.2rem" $justifyContent="flex-end">
					<Button
						$buttonType="FILLED"
						$color={'RED'}
						style={{ marginRight: 'auto' }}
						onClick={() => {
							handleClose();
						}}
					>
						강제 종료
					</Button>
					<Button
						$buttonType="LINE"
						$color={!isConfirm ? 'PRIMARY' : 'TERTIARY'}
						onClick={() => {
							handleConfirm();
						}}
					>
						{!isConfirm ? '정답 확인' : '되돌리기'}
					</Button>
					<Button $padding="0 2.4rem" type="submit" disabled={selectIdx === null}>
						{isLast ? '결과' : '다음'}
					</Button>
				</HStack>
				<Divide />
				<Button
					$buttonType="LINE"
					onClick={() => {
						handleDescOpen();
					}}
				>
					{isDescOpen ? '해설 끄기' : '해설 보기'}
				</Button>
				{isDescOpen && content.description}
			</VStack>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export default Content;

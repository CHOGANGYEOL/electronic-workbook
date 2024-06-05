import { useMemo } from 'react';

import styled from 'styled-components';

import { HStack } from '../../../components/Common';

interface ProgressProps {
	total: number;
	current: number;
}

const UNIT = 100;

const Progress = ({ total, current }: ProgressProps) => {
	const percent = useMemo(() => Math.floor((current / total) * UNIT), [current, total]);
	return (
		<Wrapper $gap="0.4rem">
			<span className="percent">{percent}</span>/<span>{UNIT}%</span>
		</Wrapper>
	);
};

const Wrapper = styled(HStack)`
	span {
		font-weight: 600;
	}
	.percent {
		color: ${({ theme }) => theme.colors.primary[500]};
	}
`;

export default Progress;

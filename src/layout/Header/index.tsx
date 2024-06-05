import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HEADER_HEIGHT } from './const';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Common/Icon';
import { ICON_ID } from '../../components/Common/Icon/types';
import context from '../../context';
import { resetState } from '../../context/detailContext/action';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = context.detail.useDispatch();
	return (
		<Wrapper>
			<Button
				$buttonType="NONE"
				onClick={() => {
					navigate(-1);
					dispatch(resetState());
				}}
			>
				<Icon iconID={ICON_ID.BTN_ROUND_BACK} $width="2.8rem" />
			</Button>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	background-color: ${({ theme }) => theme.colors.gray[600]};
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	height: ${HEADER_HEIGHT};
	display: flex;
	align-items: center;
	padding: 0 2.4rem;
	box-shadow: ${({ theme }) => theme.shadow.modal};
	z-index: 999;
`;

export default Header;

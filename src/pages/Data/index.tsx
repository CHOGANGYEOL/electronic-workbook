import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled, { css } from 'styled-components';

import Article from '../../components/Common/Article';
import { Icon } from '../../components/Common/Icon';
import { ICON_ID } from '../../components/Common/Icon/types';
import List from '../../components/Common/List';
import Loading from '../../components/Common/Loading';
import context from '../../context';
import { setKey } from '../../context/detailContext/action';

const Data = () => {
	const { key } = useParams();
	const dispatch = context.detail.useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (key) {
			dispatch(setKey(key));
		} else {
			toast.error('잘못된 URL입니다.');
			navigate(-1);
		}
	}, [key]);

	const { data } = context.detail.useState();

	if (!data) return <Loading />;

	return (
		<Article
			$css={css`
				flex: 1;
			`}
		>
			<List
				items={data.questions}
				renderItem={(item) => (
					<Item to={String(item.questionId)}>
						{item.title}
						<Icon iconID={ICON_ID.CHEVRON} $rotate={-90} />
					</Item>
				)}
			/>
		</Article>
	);
};

const Item = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: 0.15s opacity;
	&:hover {
		opacity: 0.8;
	}
`;

export default Data;

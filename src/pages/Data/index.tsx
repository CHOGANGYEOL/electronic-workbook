import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { VStack } from '../../components/Common';
import Article from '../../components/Common/Article';
import { Icon } from '../../components/Common/Icon';
import { ICON_ID } from '../../components/Common/Icon/types';
import List from '../../components/Common/List';
import Title from '../../components/Common/Title';
import context from '../../context';

const Data = () => {
	const { data } = context.detail.useState();

	if (!data) {
		return <Navigate to={'/'} />;
	} else {
		return (
			<VStack $gap="2.4rem" $flex="1">
				<Title>{data.title}</Title>
				<Article
					$css={css`
						flex: 1;
					`}
				>
					<List
						items={data.questions}
						renderItem={(item) => (
							<Item to={String(item.questionId)}>
								{item.createAt} - {item.order.toString().padStart(2, '0')}
								<Icon iconID={ICON_ID.CHEVRON} $rotate={-90} />
							</Item>
						)}
					/>
				</Article>
			</VStack>
		);
	}
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

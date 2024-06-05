import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ALL_DATA } from '../../assets/data';
import Article from '../../components/Common/Article';
import { Icon } from '../../components/Common/Icon';
import { ICON_ID } from '../../components/Common/Icon/types';
import List from '../../components/Common/List';

const Main = () => {
	return (
		<Article
			$css={css`
				flex: 1;
			`}
		>
			<List
				items={ALL_DATA}
				renderItem={(item) => (
					<Item to={item.key}>
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

export default Main;

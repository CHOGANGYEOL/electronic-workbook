import { HStack } from '../../components/Common';
import Loading from '../../components/Common/Loading';

const Main = () => {
	return (
		<HStack $alignItems="center" $justifyContent="center" style={{ flex: '1' }}>
			<Loading />
			is Loading
		</HStack>
	);
};

export default Main;

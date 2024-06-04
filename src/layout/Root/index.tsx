import { useNavigation } from 'react-router-dom';

const Root = () => {
	const { state } = useNavigation();
	return <>{state === 'loading' && <></>}</>;
};

export default Root;

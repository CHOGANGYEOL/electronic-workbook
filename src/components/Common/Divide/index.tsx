import styled from 'styled-components';

const Divide = () => {
	return <Wrapper />;
};

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.gray[300]};
	height: 0.1rem;
	width: 100%;
`;

export default Divide;

import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
`;

const Row = styled.div`
	display: flex;
	justify-content: ${(props) => props.justify};
`;

const Col = styled.div`
	flex: ${(props) => props.size};
`;

export default Container;
export { Row, Col };

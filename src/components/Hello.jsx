import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.theme.color.primary};
`;

export default function Hello() {
  return <Container>hello</Container>;
}

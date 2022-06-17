import styled from 'styled-components';

export const SamplePostList = styled.div`
  max-width: 40rem;
  overflow: scroll;
  flex-grow: 1;
  width: 100%;
  height: calc(100vh - ${props => (props.isLoggedIn ? 11.5 : 7)}rem);
`;

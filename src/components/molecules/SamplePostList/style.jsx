import styled from 'styled-components';

export const SamplePostList = styled.div`
  // 3.5 or 8.5
  padding-top: ${props => (props.isLogin ? 8.5 : 3.5)}rem;
  width: 100%;
  max-width: 40rem;
`;

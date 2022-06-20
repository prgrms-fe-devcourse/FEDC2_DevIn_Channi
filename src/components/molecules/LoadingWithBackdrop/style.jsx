import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 999;

  display: ${props => (props.isLoading ? 'flex' : 'none')};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`;

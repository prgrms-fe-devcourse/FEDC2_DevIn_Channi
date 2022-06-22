import styled from 'styled-components';

export const Container = styled.span`
  cursor: pointer;
  padding: 0.5rem 0 0.5rem 0;

  width: 100%;
  height: fit-content;

  display: flex;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #dedede;
  }
`;

export const Content = styled.article`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  margin: 0 1rem 0 1rem;

  & > :first-child {
    margin-right: 0.5rem;
  }

  span {
    font-size: clamp(0.68rem, 1.6vw, 1rem);
  }
`;

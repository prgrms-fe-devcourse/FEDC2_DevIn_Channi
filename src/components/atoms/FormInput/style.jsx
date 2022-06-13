import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    border: transparent;

    border-bottom: 1px solid #191919;
    padding: 0.563rem 0.063rem 0.688rem 0;
    transition: all 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid #00bbff;
  }
`;

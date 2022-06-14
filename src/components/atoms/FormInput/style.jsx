import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    border: transparent;

    border-bottom: 1px solid #191919;
    padding: 0.563rem 0.063rem 0.688rem 0;
    transition: all 0.3s ease-in-out;

    margin-top: 0.563rem;
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid #00bbff;
  }

  margin-bottom: 1rem;
`;

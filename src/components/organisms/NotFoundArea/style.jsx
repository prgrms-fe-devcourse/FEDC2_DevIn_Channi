import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20vh;

  overflow: hidden;

  & > h1 {
    font-size: 4rem;
    font-weight: bold;

    margin-bottom: 3rem;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: regular;
    margin-bottom: 4rem;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${({ theme }) => theme.color.highlight};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`;

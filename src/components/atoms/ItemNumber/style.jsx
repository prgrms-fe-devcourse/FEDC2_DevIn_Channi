import styled from 'styled-components';

export const ItemNumber = styled.div`
  width: 2.5rem;
  padding: 0.3rem;
  border-radius: 2rem;
  background-color: ${props => props.fontstyle.backgroundColor};
  color: ${props => props.fontstyle.color};
  font-size: ${props => props.fontstyle.fontSize}rem;
  font-weight: bold;
  text-align: center;
`;

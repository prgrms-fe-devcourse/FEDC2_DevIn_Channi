import styled from 'styled-components';

export const Profile = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    margin-right: 0.5rem;
  }
`;

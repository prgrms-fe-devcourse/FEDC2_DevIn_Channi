import styled from 'styled-components';

export const ProfileInfo = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid ${({ theme }) => theme.color.backSub};
`;
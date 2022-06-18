import styled from 'styled-components';

export const Divider = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.color.backSub}; // 컬러 변경
  margin: 0;

  &.vertical {
    position: relative;
    top: -0.063rem;
    display: inline-block;
    width: 0.063rem;
    height: 0.875rem;
    vertical-align: middle;
    margin: 0 0.25rem;
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 0.063px;
  }
`;

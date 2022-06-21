import styled from 'styled-components';

export const Divider = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.color.backSub};
  margin: 0;

  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 14px;
    vertical-align: middle;
    margin: 0 0.25rem;
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }
`;

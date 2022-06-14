import styled from 'styled-components';

export const Divider = styled.hr`
  border: none;
  background-color: #aaa;
  margin: ${props =>
    props.type === 'vertical' ? `0 ${props.size}px` : `${props.size}px 0`};

  &.vertical {
    position: relative;
    top: -1;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }
`;

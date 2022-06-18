import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

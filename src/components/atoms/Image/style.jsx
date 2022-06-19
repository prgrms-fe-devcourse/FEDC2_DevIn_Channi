import styled from 'styled-components';

export const ImgConatiner = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
`;

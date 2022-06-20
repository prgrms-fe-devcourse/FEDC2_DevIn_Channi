import PropTypes from 'prop-types';
import { Loading } from 'components';
import * as S from './style';

export function LoadingWithBackdrop({ isLoading }) {
  return (
    <S.Container isLoading={isLoading}>
      <S.Wrapper>
        <Loading />
      </S.Wrapper>
    </S.Container>
  );
}

LoadingWithBackdrop.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

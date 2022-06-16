import PropTypes from 'prop-types';
import * as S from './style';

export function SamplePost({ title }) {
  return <S.SamplePost>{title}</S.SamplePost>;
}

SamplePost.propTypes = {
  title: PropTypes.string.isRequired,
};

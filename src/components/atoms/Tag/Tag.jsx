import propTypes from 'prop-types';
import * as S from './style';

export function Tag({ text }) {
  return <S.Tag>{text}</S.Tag>;
}

Tag.propTypes = {
  text: propTypes.string.isRequired,
};

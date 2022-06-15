import PropTypes from 'prop-types';
import * as S from './style';

export function SearchTarget({ itemName }) {
  return <S.SearchTarget>{itemName}</S.SearchTarget>;
}

SearchTarget.propTypes = {
  itemName: PropTypes.string.isRequired,
};

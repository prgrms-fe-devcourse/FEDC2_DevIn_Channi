import PropTypes from 'prop-types';
import * as S from './style';

export function SearchNumber({ itemNum }) {
  return <S.SearchNumber>{itemNum}</S.SearchNumber>;
}

SearchNumber.propTypes = {
  itemNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

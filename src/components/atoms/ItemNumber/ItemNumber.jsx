/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import * as S from './style';

export function ItemNumber({ itemNum, fontstyle }) {
  return <S.ItemNumber fontstyle={fontstyle}>{itemNum}</S.ItemNumber>;
}

ItemNumber.propTypes = {
  itemNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  fontstyle: PropTypes.shape({
    fontSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
};

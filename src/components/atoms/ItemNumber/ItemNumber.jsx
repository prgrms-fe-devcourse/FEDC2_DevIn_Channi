import PropTypes from 'prop-types';
import * as S from './style';

export function ItemNumber({ itemNum, style }) {
  return <S.ItemNumber style={style}>{itemNum}</S.ItemNumber>;
}

ItemNumber.propTypes = {
  itemNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.shape({ 
    fontSize: PropTypes.number.isRequired, 
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired
};

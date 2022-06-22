import PropTypes from 'prop-types';
import * as S from './style';

export function ItemText({ itemName }) {
  return <S.ItemText>{itemName}</S.ItemText>;
}

ItemText.propTypes = {
  itemName: PropTypes.string.isRequired,
};

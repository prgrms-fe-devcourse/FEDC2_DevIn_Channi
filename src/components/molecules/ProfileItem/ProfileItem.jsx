import PropTypes from 'prop-types';
import { ItemText, ItemNumber } from 'components';
import { theme } from 'styles';
import * as S from './style';

export function ProfileItem({ itemName, itemNum }) {
  const fontstyle = {
    fontSize: 1,
    color: theme.color.textPrime,
    backgroundColor: 'transparent',
  };

  return (
    <S.ProfileItem>
      <ItemText itemName={itemName} />
      <ItemNumber itemNum={itemNum} fontstyle={fontstyle} />
    </S.ProfileItem>
  );
}

ProfileItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemNum: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { Icon } from 'components';
import * as S from './style';

export function IconBtn({ className, type, onClick, icon, hoverColor }) {
  return (
    <S.Btn
      className={className}
      type={type}
      onClick={onClick}
      hoverColor={hoverColor}
    >
      <Icon icon={icon} />
    </S.Btn>
  );
}

IconBtn.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  hoverColor: PropTypes.oneOf([
    'textPrime',
    'textSecond',
    'highlight',
    'blue',
    'red',
    'green',
    '',
  ]),
};

IconBtn.defaultProps = {
  className: '',
  hoverColor: '',
};

import PropTypes from 'prop-types';
import * as S from './style';

export function TextBtn({ children, type, onClick }) {
  return (
    <S.Btn type={type} onClick={onClick}>
      {children}
    </S.Btn>
  );
}
TextBtn.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

TextBtn.defaultProps = {
  type: 'button',
};

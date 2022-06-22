import PropTypes from 'prop-types';
import * as S from './style';

export function TextBtn({ children, className, type, onClick }) {
  return (
    <S.Btn className={className} type={type} onClick={onClick}>
      {children}
    </S.Btn>
  );
}
TextBtn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

TextBtn.defaultProps = {
  className: '',
  type: 'button',
};

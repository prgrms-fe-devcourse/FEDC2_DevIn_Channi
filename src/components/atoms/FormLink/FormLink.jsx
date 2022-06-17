import { useDispatch } from 'react-redux';
import { setAuthValidation } from 'store';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';

export function FormLink({ introText, linkText, linkPath }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setAuthValidation(''));
  };

  return (
    <S.Container>
      {introText}
      <Link to={linkPath} onClick={onClick}>
        {linkText}
      </Link>
    </S.Container>
  );
}

FormLink.propTypes = {
  introText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

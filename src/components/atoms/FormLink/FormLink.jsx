import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';

export function FormLink({ introText, linkText, linkPath }) {
  return (
    <S.Container>
      {introText}
      <Link to={linkPath}>{linkText}</Link>
    </S.Container>
  );
}

FormLink.propTypes = {
  introText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { Header, Footer } from 'components';
import * as S from './style';

export function NavTemplate({ children }) {
  return (
    <S.Container>
      <Header />
      {children}
      <Footer />
    </S.Container>
  );
}

NavTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

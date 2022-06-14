import { Header, Footer, SamplePostList } from 'components';
import PropTypes from 'prop-types';
import * as S from './style';

export function HomePage({ isSignIn }) {
  return (
    <S.HomePage>
      <Header isSignIn={isSignIn} />
      <SamplePostList />
      <Footer />
    </S.HomePage>
  );
}

HomePage.propTypes = {
  isSignIn: PropTypes.bool.isRequired,
};

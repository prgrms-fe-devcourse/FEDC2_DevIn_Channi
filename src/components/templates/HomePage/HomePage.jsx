import { Header, Footer, CreatePost, SamplePostList } from 'components';
import PropTypes from 'prop-types';
import * as S from './style';

export function HomePage({ isLogin }) {
  console.log('HomePage isLogin', isLogin);
  return (
    <S.HomePage>
      <Header isLogin={isLogin} />
      {isLogin && <CreatePost />}
      <SamplePostList isLogin={isLogin} />
      <Footer />
    </S.HomePage>
  );
}

HomePage.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

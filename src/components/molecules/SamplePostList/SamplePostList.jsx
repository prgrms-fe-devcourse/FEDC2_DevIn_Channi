import PropTypes from 'prop-types';
import { SamplePost } from 'components';
import * as S from './style';

export function SamplePostList({ isLogin }) {
  return (
    <S.SamplePostList isLogin={isLogin}>
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
      <SamplePost />
    </S.SamplePostList>
  );
}

SamplePostList.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

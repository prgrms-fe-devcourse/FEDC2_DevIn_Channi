import { useState } from 'react';
import PropTypes from 'prop-types';
import { WrapperLink, RoundInput, Avatar } from 'components';
import * as S from './style';

export function CommentForm({ author }) {
  const { _id: authorId, image: avatarUrl } = author;
  const [commentContent, setCommentContent] = useState('');

  const onCommentChange = content => {
    // set commentContent(content)
  };

  const onCommentSubmit = e => {
    e.preventDefault();
    // 1. create comment
    // 2. update comments state -> ui
    // posts 전체를 업데이트 할 순 없어서 -> 낙관적 업데이트 필요
  };

  return (
    <S.Form onSubmit={onCommentSubmit}>
      <WrapperLink type="link" to={`/profile/${authorId}`} borderRadius="50%">
        <Avatar src={avatarUrl} alt="" />
      </WrapperLink>
      <RoundInput
        name="comment"
        label="comment"
        placeholder="댓글을 입력하세요"
        onChange={onCommentChange}
      />
    </S.Form>
  );
}

CommentForm.propTypes = {
  author: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

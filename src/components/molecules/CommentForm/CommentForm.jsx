import { useState } from 'react';
import PropTypes from 'prop-types';
import { AuthorType } from 'types';
import { WrapperLink, Avatar } from 'components';
import * as S from './style';

export function CommentForm({ author, createComment }) {
  const [inputValue, setInputValue] = useState('');

  const onInputchange = e => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = async e => {
    e.preventDefault();
    await createComment({ comment: inputValue });
    setInputValue('');
  };

  return (
    <S.Form autocomplete="off" onSubmit={onFormSubmit}>
      <WrapperLink type="link" to={`/profile/${author._id}`} borderRadius="50%">
        <Avatar src={author.image} alt="" />
      </WrapperLink>
      <S.Label>
        <span className="visually-hidden">댓글</span>
        <S.Input
          type="text"
          name="comment"
          placeholder="댓글을 입력하세요"
          value={inputValue}
          onChange={onInputchange}
        />
      </S.Label>
    </S.Form>
  );
}

CommentForm.propTypes = {
  author: AuthorType.isRequired,
  createComment: PropTypes.func.isRequired,
};

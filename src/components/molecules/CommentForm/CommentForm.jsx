import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AuthorType } from 'types';
import { WrapperLink, Avatar } from 'components';
import * as S from './style';

export function CommentForm({ createComment }) {
  const { user } = useSelector(state => state.user);
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
      <WrapperLink type="link" to={`/profiles/${user._id}`} borderRadius="50%">
        <Avatar src={user.image} alt="" />
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
  createComment: PropTypes.func.isRequired,
};

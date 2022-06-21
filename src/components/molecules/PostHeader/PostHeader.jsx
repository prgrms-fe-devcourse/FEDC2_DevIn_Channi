import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PostType, AuthorType } from 'types';
import {
  IconBtn,
  MenuItem,
  TextLink,
  WrapperLink,
  Avatar,
  Time,
  Paragraph,
} from 'components';

import * as S from './style';

export function PostHeader({ post, author, deletePost }) {
  const [isMyPost, setIsMyPost] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    user: { _id: userId },
    isLoggedIn,
  } = useSelector(state => state.user);

  useEffect(() => {
    if (isLoggedIn && author._id === userId) {
      setIsMyPost(true);
    }
  }, [isLoggedIn, userId, author]);

  const onMoreActsBtnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onMoreActsBtnBlur = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  const onPostDeleteBtnClick = async () => {
    await deletePost({ postId: post._id });
  };

  return (
    <S.Header>
      <WrapperLink
        type="link"
        to={`/profiles/${author._id}`}
        borderRadius="50%"
      >
        <Avatar src={author.image} alt="" />
      </WrapperLink>
      <S.Flex>
        <TextLink type="link" to={`/profiles/${author._id}`}>
          <Paragraph fontSize="small" bold isTruncated lineClamp={1}>
            {author.fullName}
          </Paragraph>
        </TextLink>
        <Time createdAt={post.createdAt} />
      </S.Flex>
      {isMyPost && (
        <IconBtn
          type="button"
          onClick={onMoreActsBtnClick}
          onBlur={onMoreActsBtnBlur}
          icon="menus"
        />
      )}
      {isMyPost && isMenuOpen && (
        <S.StyledMenu>
          <MenuItem type="link" to={`/posts/${post._id}/update`} isFirst>
            수정
          </MenuItem>
          <MenuItem type="button" onClick={onPostDeleteBtnClick} isLast>
            삭제
          </MenuItem>
        </S.StyledMenu>
      )}
    </S.Header>
  );
}

PostHeader.propTypes = {
  post: PostType.isRequired,
  author: AuthorType.isRequired,
  deletePost: PropTypes.func.isRequired,
};

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useCookie } from 'hooks';
import { postApi } from 'api';
import * as S from './style';

export function PostHeader({ post, author, onDelete }) {
  const navigate = useNavigate();
  const { getCookie } = useCookie();

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
    try {
      await postApi.delete({
        token: getCookie(),
        data: {
          postId: post._id,
        },
      });
      if (onDelete) {
        onDelete(post._id);
      } else {
        navigate('/');
      }
    } catch (e) {
      console.error(e.message);
    }
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
  onDelete: PropTypes.func,
};

PostHeader.defaultProps = {
  onDelete: null,
};

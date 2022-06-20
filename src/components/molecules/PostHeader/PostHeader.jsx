import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  WrapperLink,
  TextLink,
  IconBtn,
  Avatar,
  Time,
  Paragraph,
  MenuItem,
} from 'components';
import { useCookie } from 'hooks';
import * as S from './style';

export function PostHeader({
  authorId,
  authorName,
  authorAvatarUrl,
  postId,
  postCreatedAt,
  deletePost,
}) {
  const [isMyPost, setIsMyPost] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    user: { _id: userId },
    isLoggedIn,
  } = useSelector(state => state.user);
  const { getCookie } = useCookie();

  const onMoreActsBtnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onMoreActsBtnBlur = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 150);
  };

  const onPostDeleteBtnClick = async () => {
    const token = getCookie();
    await deletePost({ postId, token });
  };

  useEffect(() => {
    if (isLoggedIn && authorId === userId) {
      setIsMyPost(true);
    }
  }, [isLoggedIn, userId, authorId]);

  return (
    <S.Header>
      <WrapperLink type="link" to={`/profiles/${authorId}`} borderRadius="50%">
        <Avatar src={authorAvatarUrl} alt="" />
      </WrapperLink>
      <S.Flex>
        <TextLink type="link" to={`/profiles/${authorId}`}>
          <Paragraph fontSize="small" bold isTruncated lineClamp={1}>
            {authorName}
          </Paragraph>
        </TextLink>
        <Time createdAt={postCreatedAt} />
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
          <MenuItem type="link" to={`/posts/${postId}/edit`} isFirst>
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
  authorId: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorAvatarUrl: PropTypes.string,
  postId: PropTypes.string.isRequired,
  postCreatedAt: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

PostHeader.defaultProps = {
  authorAvatarUrl: '',
};

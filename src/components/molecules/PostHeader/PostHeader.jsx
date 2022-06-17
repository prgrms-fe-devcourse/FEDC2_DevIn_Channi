import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WrapperLink, TextLink, IconBtn, Avatar, Time, Span } from 'components';
import * as S from './style';

export function PostHeader({ author, postCreatedAt }) {
  const { _id: authorId, fullName, image: avatarUrl } = author;

  // 초기값 false로
  const [isMyPost, setIsMyPost] = useState(true);

  const onMoreActsBtnClick = () => {
    // show dropdown menu
  };

  useEffect(() => {
    // set isMyPost
    // user._id === author._id -> true
  }, []);

  return (
    <S.Header>
      <WrapperLink type="link" to={`/profiles/${authorId}`} borderRadius="50%">
        <Avatar src={avatarUrl} alt="" />
      </WrapperLink>
      <S.Flex>
        <TextLink type="link" to="#">
          <Span fontSize="small" bold>
            {fullName}
          </Span>
        </TextLink>
        <Time createdAt={postCreatedAt} />
      </S.Flex>
      {isMyPost && (
        <IconBtn type="button" onClick={onMoreActsBtnClick} icon="menus" />
      )}
    </S.Header>
  );
}

PostHeader.propTypes = {
  author: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
  postCreatedAt: PropTypes.string.isRequired,
};

PostHeader.defaultProps = {};

import PropTypes from 'prop-types';
import { WrapperLink, Avatar, Time, Paragraph, Span } from 'components';
import * as S from './style';

export function CommentThread({ comment }) {
  const {
    comment: commentContent,
    author: { _id: authorId, fullName, image: avatarUrl },
    createdAt: commentCreatedAt,
  } = comment;

  return (
    <S.Article>
      <WrapperLink type="link" to={`/profiles/${authorId}`} borderRadius="50%">
        <Avatar src={avatarUrl} alt="" />
      </WrapperLink>
      <S.Flex>
        <div>
          <S.StyledTextLink type="link" to={`/profiles/${authorId}`}>
            <Span fontSize="small" bold>
              {fullName}
            </Span>
          </S.StyledTextLink>
          <Time createdAt={commentCreatedAt} />
        </div>

        <Paragraph fontSize="small" color="textSecond">
          {commentContent}
        </Paragraph>
      </S.Flex>
    </S.Article>
  );
}

CommentThread.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

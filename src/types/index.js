import PropTypes from 'prop-types';

export const AuthorType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    _id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    image: PropTypes.string,
  }),
]);

export const LikeType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    _id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  }),
]);

export const LikesType = PropTypes.arrayOf(LikeType);

export const CommentType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    _id: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: AuthorType.isRequired,
  }),
]);

export const CommentsType = PropTypes.arrayOf(CommentType);

export const PostType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  author: AuthorType.isRequired,
  likes: LikesType.isRequired,
  comments: CommentsType.isRequired,
});

export const PostsType = PropTypes.arrayOf(PostType);

export const OgType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  url: PropTypes.string.isRequired,
});

export const PostBodyType = PropTypes.shape({
  content: PropTypes.string.isRequired,
  og: OgType,
});

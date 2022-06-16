import PropTypes from 'prop-types';
import { SamplePost } from 'components';
import * as S from './style';

const DUMMY_DATA = [
  {
    likes: [],
    comments: [],
    _id: '62a96888ce13872d24de1dc4',
    title: 'posttest3',
    channel: {
      authRequired: false,
      posts: [
        '62a86b78b9bad678d9c2cbd4',
        '62a8bbefce13872d24de1bc9',
        '62a96888ce13872d24de1dc4',
      ],
      _id: '62a86596b9bad678d9c2cb9d',
      name: 'default',
      description: 'default',
      createdAt: '2022-06-14T10:40:22.779Z',
      updatedAt: '2022-06-15T05:05:12.752Z',
      __v: 0,
    },
    author: {
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: false,
      posts: [],
      likes: [],
      comments: [],
      followers: [],
      following: [],
      notifications: [],
      messages: [],
      _id: '62a861a1b9bad678d9c2cb88',
      fullName: 'posttest',
      email: 'posttest',
      createdAt: '2022-06-14T10:23:29.326Z',
      updatedAt: '2022-06-15T05:07:26.813Z',
      __v: 0,
    },
    createdAt: '2022-06-15T05:05:12.743Z',
    updatedAt: '2022-06-15T05:05:12.743Z',
    __v: 0,
  },
  {
    likes: [],
    comments: [],
    _id: '62a8bbefce13872d24de1bc9',
    title: 'posttest2',
    channel: {
      authRequired: false,
      posts: [
        '62a86b78b9bad678d9c2cbd4',
        '62a8bbefce13872d24de1bc9',
        '62a96888ce13872d24de1dc4',
      ],
      _id: '62a86596b9bad678d9c2cb9d',
      name: 'default',
      description: 'default',
      createdAt: '2022-06-14T10:40:22.779Z',
      updatedAt: '2022-06-15T05:05:12.752Z',
      __v: 0,
    },
    author: {
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: false,
      posts: [],
      likes: [],
      comments: [],
      followers: [],
      following: [],
      notifications: [],
      messages: [],
      _id: '62a861a1b9bad678d9c2cb88',
      fullName: 'posttest',
      email: 'posttest',
      createdAt: '2022-06-14T10:23:29.326Z',
      updatedAt: '2022-06-15T05:07:26.813Z',
      __v: 0,
    },
    createdAt: '2022-06-14T16:48:47.598Z',
    updatedAt: '2022-06-14T16:48:47.598Z',
    __v: 0,
  },
  {
    likes: [],
    comments: [],
    _id: '62a86b78b9bad678d9c2cbd4',
    title: 'posttest',
    channel: {
      authRequired: false,
      posts: [
        '62a86b78b9bad678d9c2cbd4',
        '62a8bbefce13872d24de1bc9',
        '62a96888ce13872d24de1dc4',
      ],
      _id: '62a86596b9bad678d9c2cb9d',
      name: 'default',
      description: 'default',
      createdAt: '2022-06-14T10:40:22.779Z',
      updatedAt: '2022-06-15T05:05:12.752Z',
      __v: 0,
    },
    author: {
      role: 'Regular',
      emailVerified: false,
      banned: false,
      isOnline: false,
      posts: [],
      likes: [],
      comments: [],
      followers: [],
      following: [],
      notifications: [],
      messages: [],
      _id: '62a861a1b9bad678d9c2cb88',
      fullName: 'posttest',
      email: 'posttest',
      createdAt: '2022-06-14T10:23:29.326Z',
      updatedAt: '2022-06-15T05:07:26.813Z',
      __v: 0,
    },
    createdAt: '2022-06-14T11:05:28.015Z',
    updatedAt: '2022-06-14T11:05:28.015Z',
    __v: 0,
  },
];

export function SamplePostList({ isLogin }) {
  return (
    <S.SamplePostList isLogin={isLogin}>
      {DUMMY_DATA.map(post => (
        <SamplePost key={post._id} title={post.title} />
      ))}
    </S.SamplePostList>
  );
}

SamplePostList.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

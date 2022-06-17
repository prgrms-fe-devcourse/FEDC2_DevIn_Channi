export const likeData = {
  _id: '62ab699f4c6f777d359cd25f',
  user: '62a861a1b9bad678d9c2cb88',
  post: '62aad594152cb44961f63e57',
  createdAt: '2022-06-16T17:34:23.374Z',
  updatedAt: '2022-06-16T17:34:23.374Z',
  __v: 0,
};

export const commentData = {
  _id: '62ab68494c6f777d359cd24d',
  comment: 'hi',
  // comment:
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur aut corrupti nulla nisi quis? Impedit harum animi iste odit ea eum, quibusdam ad a in provident sint. Assumenda ducimus repudiandae quia, quo non eveniet voluptates temporibus recusandae dolore beatae a delectus aspernatur nihil vero enim ab, rerum quibusdam! Suscipit quae enim cupiditate itaque non cumque magnam! Odio fugit autem unde sequi voluptatibus ullam.',
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
    password: '$2b$10$kYTWDyWxhOrec7oAM/K7IO9wT/Xkuu4f2UqerY9GxbySEWNBI5w96',
    createdAt: '2022-06-14T10:23:29.326Z',
    updatedAt: '2022-06-16T07:04:14.999Z',
    __v: 0,
  },
  post: '62aad594152cb44961f63e57',
  createdAt: '2022-06-16T17:28:41.751Z',
  updatedAt: '2022-06-16T17:28:41.751Z',
  __v: 0,
};

export const postData = {
  likes: [likeData],
  comments: [commentData],
  _id: '62a86b78b9bad678d9c2cbd4',
  // title: 'posttest',
  // title:
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur aut corrupti nulla nisi quis? Impedit harum animi iste odit ea eum, quibusdam ad a in provident sint. Assumenda ducimus repudiandae quia, quo non eveniet voluptates temporibus recusandae dolore beatae a delectus aspernatur nihil vero enim ab, rerum quibusdam! Suscipit quae enim cupiditate itaque non cumque magnam! Odio fugit autem unde sequi voluptatibus ullam.',
  title:
    '대한민국의 영토는 한반도와 그 부속도서로 한다. 대법원과 각급법원의 조직은 법률로 정한다. 탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로 정한다.',
  channel: {
    authRequired: false,
    posts: ['62a86b78b9bad678d9c2cbd4'],
    _id: '62a86596b9bad678d9c2cb9d',
    name: 'default',
    description: 'default',
    createdAt: '2022-06-14T10:40:22.779Z',
    updatedAt: '2022-06-14T11:05:28.020Z',
    __v: 0,
  },
  author: {
    // image: '',
    // coverImage: '',
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
    updatedAt: '2022-06-14T11:04:56.969Z',
    __v: 0,
  },
  createdAt: '2022-06-14T11:05:28.015Z',
  updatedAt: '2022-06-14T11:05:28.015Z',
  __v: 0,
};

export const ogData = {
  title: '네이버',
  // title:
  //   '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
  // description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
  description:
    '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
  image:
    'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
  keywords: '',
  url: 'https://www.naver.com/',
};

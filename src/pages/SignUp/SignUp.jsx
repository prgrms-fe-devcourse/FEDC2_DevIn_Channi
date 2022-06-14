import { Form } from 'components';
import * as S from './style';

export function SignUp() {
  const info = {
    title: '회원가입',
    inputs: [
      {
        id: 1,
        type: 'text',
        name: '이름',
        placeholder: '프로필 이름',
      },
      {
        id: 2,
        type: 'email',
        name: '이메일',
        placeholder: '이메일을 입력해주세요',
      },
      {
        id: 3,
        type: 'password',
        name: '비밀번호',
        placeholder: '비밀번호를 입력해주세요',
      },
    ],
    isAuth: true,
    link: {
      introText: '이미 회원이신가요?',
      linkText: '로그인하기',
      linkPath: '/signin',
    },
  };

  return (
    <S.Container>
      <Form info={info} />
    </S.Container>
  );
}

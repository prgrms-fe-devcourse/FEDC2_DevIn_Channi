import { Form } from 'components';
import * as S from './style';

export function SignIn() {
  const info = {
    title: '로그인',
    inputs: [
      {
        id: 1,
        type: 'email',
        name: '이메일',
        placeholder: '이메일을 입력해주세요',
      },
      {
        id: 2,
        type: 'password',
        name: '비밀번호',
        placeholder: '비밀번호를 입력해주세요',
      },
    ],
    isAuth: true,
    link: {
      introText: '아직 회원이 아니신가요?',
      linkText: '가입하기',
      linkPath: '/signup',
    },
  };

  return (
    <S.Container>
      <Form info={info} />
    </S.Container>
  );
}

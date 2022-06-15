import { Form } from 'components';
import { useForm } from 'hooks';
import * as S from './style';

export function SignIn() {
  const { onChange, onSubmit } = useForm({
    initialState: {
      email: '',
      password: '',
    },
    authType: 'signin',
  });

  const info = {
    title: '로그인',
    inputs: [
      {
        id: 1,
        type: 'email',
        title: '이메일',
        name: 'email',
        placeholder: '이메일을 입력해주세요',
      },
      {
        id: 2,
        type: 'password',
        title: '비밀번호',
        name: 'password',
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
      <Form info={info} onChange={onChange} onSubmit={onSubmit} />
    </S.Container>
  );
}

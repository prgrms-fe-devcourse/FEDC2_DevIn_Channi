import { Form } from 'components';
import { useForm } from 'hooks';
import { auth } from 'api';
import * as S from './style';

export function SignUp() {
  const { onChange, onSubmit } = useForm({
    initialState: {
      fullName: '',
      email: '',
      password: '',
    },
    authCallback: async ({ formData }) => {
      const response = await auth.signup({ ...formData });
      return response;
    },
  });

  const info = {
    title: '회원가입',
    inputs: [
      {
        id: 1,
        type: 'text',
        title: '이름',
        name: 'fullName',
        placeholder: '프로필 이름',
      },
      {
        id: 2,
        type: 'email',
        title: '이메일',
        name: 'email',
        placeholder: '이메일을 입력해주세요',
      },
      {
        id: 3,
        type: 'password',
        title: '비밀번호',
        name: 'password',
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
      <Form info={info} onChange={onChange} onSubmit={onSubmit} />
    </S.Container>
  );
}

import { FormBtn, FormInput } from 'components';
import * as S from './style';

export function SignIn() {
  const onClick = () => console.log('hello');
  return (
    <S.Container>
      <div>dsds</div>
      <div>dsds</div>
      <div>dsds</div>
      <FormInput type="email" name="이메일" />
      <FormBtn onClick={onClick} text="Submit" />
    </S.Container>
  );
}

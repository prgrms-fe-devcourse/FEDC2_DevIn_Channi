import { SubmitBtn } from 'components';
import * as S from './style';

export function SignIn() {
  const onClick = () => console.log('hello');
  return (
    <S.Container>
      <div>dsds</div>
      <div>dsds</div>
      <div>dsds</div>
      <SubmitBtn onClick={onClick} text="Submit" />
    </S.Container>
  );
}

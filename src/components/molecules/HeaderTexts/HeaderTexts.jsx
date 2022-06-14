import { Label } from 'components';
import * as S from './style';

export function HeaderTexts() {
  return (
    <S.HeaderTexts>
      <Label content="로그인" width={39} height={21} />
      <Label content="회원가입" width={52} height={21} />
    </S.HeaderTexts>
  );
}

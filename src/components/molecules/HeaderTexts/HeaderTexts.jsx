import { WrapperLink } from 'components';
import * as S from './style';

export function HeaderTexts() {
  return (
    <S.HeaderTexts>
      <WrapperLink to="/signin" type="link">
        로그인
      </WrapperLink>
      <WrapperLink to="/signup" type="link">
        회원가입
      </WrapperLink>
    </S.HeaderTexts>
  );
}

import { useState } from 'react';
import { IconBtn, MenuItem, WrapperLink } from 'components';
import * as S from './style';

export function HeaderButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  const onBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  return (
    <S.HeaderButtons>
      <WrapperLink to="/notifications" type="link">
        <IconBtn icon="bell" type="button" />
      </WrapperLink>
      <IconBtn icon="bars" type="button" onClick={onClick} onBlur={onBlur} />
      {isOpen && (
        <S.StyledMenu>
          <MenuItem type="link" to="/profile/:user-id">
            내 프로필
          </MenuItem>
          <MenuItem type="link" to="/profile/update">
            내 정보 수정
          </MenuItem>
          <MenuItem type="link" to="/logout">
            로그아웃
          </MenuItem>
        </S.StyledMenu>
      )}
    </S.HeaderButtons>
  );
}

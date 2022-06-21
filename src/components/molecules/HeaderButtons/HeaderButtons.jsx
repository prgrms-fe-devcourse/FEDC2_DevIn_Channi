import { useState } from 'react';
import { Icon, IconBtn, MenuItem, WrapperLink } from 'components';
import { useCookie } from 'hooks';
import * as S from './style';

export function HeaderButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const { removeCookie } = useCookie();
  const onClickBarBtn = () => {
    setIsOpen(!isOpen);
  };
  const onBlurBarBtn = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  const handleLogOut = () => {
    removeCookie();
  };
  return (
    <S.HeaderButtons>
      <WrapperLink to="/notification" type="link">
        <Icon icon="bell" type="button" />
      </WrapperLink>
      <IconBtn
        icon="bars"
        type="button"
        onClick={onClickBarBtn}
        onBlur={onBlurBarBtn}
      />
      {isOpen && (
        <S.StyledMenu>
          <MenuItem type="link" to="/profile/:user-id" isFirst>
            내 프로필
          </MenuItem>
          <MenuItem type="link" to="/profile/update">
            내 정보 수정
          </MenuItem>
          <MenuItem type="button" onClick={handleLogOut} isLast>
            로그아웃
          </MenuItem>
        </S.StyledMenu>
      )}
    </S.HeaderButtons>
  );
}

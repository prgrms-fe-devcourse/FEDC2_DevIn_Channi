import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon, IconBtn, MenuItem, WrapperLink } from 'components';
import * as S from './style';


export function HeaderButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const authUser = useSelector(state => state.user.user);

  const onClickBarBtn = () => {
    setIsOpen(!isOpen);
  };
  const onBlurBarBtn = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
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
          <MenuItem type="link" to={`/profiles/${authUser._id}`} isFirst>
            내 프로필
          </MenuItem>
          <MenuItem type="link" to="/profiles/update">
            내 정보 수정
          </MenuItem>
          <MenuItem type="link" to="/logout" isLast>
            로그아웃
          </MenuItem>
        </S.StyledMenu>
      )}
    </S.HeaderButtons>
  );
}

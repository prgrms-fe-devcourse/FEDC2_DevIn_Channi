import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCookie } from 'hooks';
import { Icon, IconBtn, MenuItem, WrapperLink } from 'components';
import { setIsLoggedIn } from 'store';
import * as S from './style';

export function HeaderButtons() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const { user } = useSelector(state => state.user);
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
    if (isLoggedIn) {
      removeCookie();
      dispatch(setIsLoggedIn(false));
      navigate('/');
    }
  };
  console.log('noti', user.notifications.length);
  return (
    <S.HeaderButtons>
      <WrapperLink to="/notification" type="link">
        {user.notifications.length > 0 && <S.Badge />}
        <Icon icon="bell" />
      </WrapperLink>
      <IconBtn
        icon="bars"
        type="button"
        onClick={onClickBarBtn}
        onBlur={onBlurBarBtn}
      />
      {isOpen && (
        <S.StyledMenu>
          <MenuItem type="link" to="/profiles/:id" isFirst>
            내 프로필
          </MenuItem>
          <MenuItem type="link" to="/profiles/update">
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

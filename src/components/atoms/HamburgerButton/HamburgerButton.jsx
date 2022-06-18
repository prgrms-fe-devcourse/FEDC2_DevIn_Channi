import { Icon, HamburgerList } from 'components';
import { useClickAway } from 'hooks';
import { useState, forwardRef } from 'react';
import * as S from './style';

export function HamburgerButton() {
  const [show, setShow] = useState(false);
  const ref = useClickAway(e => {
    console.log(e.target);
    setShow(false);
  });
  return (
    <S.HamburgerButton
      onClick={() => {
        setShow(true);
      }}
    >
      <Icon icon="bars" />
      {show &&
        forwardRef(
          <HamburgerList
            ref={ref}
            style={{ display: show ? 'block' : 'none' }}
          />,
        )}
    </S.HamburgerButton>
  );
}

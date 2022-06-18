import { useState } from 'react';
import { useClickAway } from 'hooks';
import { Icon, HamburgerList } from 'components';
import * as S from './style';

export function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(e => {
    console.log(e.target);
    if (e.target.tagName !== 'I') {
      setIsOpen(false);
    }
  });

  return (
    <S.HamburgerButton>
      <Icon icon="bars" />
      <HamburgerList ref={ref} style={{ display: isOpen ? 'block' : 'none' }} />
    </S.HamburgerButton>
  );
}

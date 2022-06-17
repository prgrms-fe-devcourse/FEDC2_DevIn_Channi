import { useState } from 'react';
import { Icon, HamburgerList } from 'components';
import * as S from './style';

export function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    console.log('isOpen', isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <S.HamburgerButton onClick={() => toggleOpen()}>
      <Icon icon="bars" />
      {isOpen && <HamburgerList />}
    </S.HamburgerButton>
  );
}

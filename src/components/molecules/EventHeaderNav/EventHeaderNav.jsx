import { Divider } from 'components';
import { useDispatch } from 'react-redux';
import { setEventType } from 'store';
import * as S from './style';

export function EventHeaderNav() {
  const dispatch = useDispatch();

  const handleClickEventTab = () => {
    console.log('click event tab');
    dispatch(setEventType('event'));
  };
  const handleClickMeetingTab = () => {
    console.log('click meeting tab');
    dispatch(setEventType('meeting'));
  };

  return (
    <S.EventHeaderNav>
      <span onClick={handleClickEventTab}>이벤트</span>
      <Divider type="vertical" />
      <span onClick={handleClickMeetingTab}>모임</span>
    </S.EventHeaderNav>
  );
}

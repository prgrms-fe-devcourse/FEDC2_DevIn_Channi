import { Divider } from 'components';
import { useDispatch } from 'react-redux';
import { setEventType } from 'store';
import * as S from './style';

export function EventHeaderNav() {
  const dispatch = useDispatch();

  const handleClickEventTab = () => {
    dispatch(setEventType('event'));
  };
  const handleClickOtherEventTab = () => {
    dispatch(setEventType('etc'));
  };
  const handleClickMeetingTab = () => {
    dispatch(setEventType('meeting'));
  };

  return (
    <S.EventHeaderNav>
      <span onClick={handleClickEventTab}>이벤트</span>
      <Divider type="vertical" />
      <span onClick={handleClickOtherEventTab}>기타</span>
      <Divider type="vertical" />
      <span onClick={handleClickMeetingTab}>모임</span>
    </S.EventHeaderNav>
  );
}

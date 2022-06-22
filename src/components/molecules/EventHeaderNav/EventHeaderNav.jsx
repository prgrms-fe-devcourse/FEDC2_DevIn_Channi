import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Divider } from 'components';
import { setEventType } from 'store';
import PropTypes from 'prop-types';
import * as S from './style';

export function EventHeaderNav({ onTabChange }) {
  const [currentType, setCurrentType] = useState('event');
  const dispatch = useDispatch();

  const handleClickEventTab = () => {
    dispatch(setEventType('event'));
    setCurrentType('event');
    onTabChange(false);
  };
  const handleClickOtherEventTab = () => {
    dispatch(setEventType('etc'));
    setCurrentType('etc');
    onTabChange(false);
  };
  const handleClickMeetingTab = () => {
    dispatch(setEventType('meeting'));
    setCurrentType('meeting');
    onTabChange(false);
  };

  return (
    <S.EventHeaderNav currentType={currentType}>
      <span name="event" onClick={handleClickEventTab}>
        이벤트
      </span>
      <Divider type="vertical" />
      <span name="etc" onClick={handleClickOtherEventTab}>
        기타
      </span>
      <Divider type="vertical" />
      <span name="meeting" onClick={handleClickMeetingTab}>
        모임
      </span>
    </S.EventHeaderNav>
  );
}

EventHeaderNav.propTypes = {
  onTabChange: PropTypes.func.isRequired,
};

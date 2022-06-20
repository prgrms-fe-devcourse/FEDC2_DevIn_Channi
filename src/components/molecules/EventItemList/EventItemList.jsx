import { EVENT_DATA } from 'assets';
import { EventItem } from 'components';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

import * as S from './style';

export function EventItemList() {
  const eventType = useSelector(state => state.eventType.type);
  const eventDatas = EVENT_DATA[eventType];

  // initial Type => event
  return (
    <S.EventItemList>
      {eventDatas.map(event => (
        <EventItem key={nanoid()} event={event} eventType={eventType} />
      ))}
    </S.EventItemList>
  );
}

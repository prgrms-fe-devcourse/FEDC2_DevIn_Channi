import { EVENT_DATA } from 'assets';
import { EventItem } from 'components';
import { useSelector } from 'react-redux';

import * as S from './style';

export function EventItemList() {
  const eventType = useSelector(state => state.eventType.type);
  const EventData = EVENT_DATA[eventType];
  console.log(EventData);
  // initial Type => event
  return (
    <S.EventItemList>
      {eventType === 'event' && EVENT_DATA.map()}
      {eventType === 'etc' && <h1>Etc!!!</h1>}
      {eventType === 'meeting' && <h1>Meeting!!!</h1>}
      {/* {eventType === 'event' &&
        EVENT_DATA.map(event => <EventItem key={event.id} event={event} />)}
      {eventType === 'meeting' &&
        EVENT_DATA.map(event => <EventItem key={event.id} event={event} />)} */}
    </S.EventItemList>
  );
}

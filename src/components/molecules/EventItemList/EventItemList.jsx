import { EVENT_DATA } from 'assets';
import { EventItem } from 'components';
import { useSelector } from 'react-redux';

import * as S from './style';

export function EventItemList() {
  const eventType = useSelector(state => state.eventType.type);
  // initial Type => event
  return (
    <S.EventItemList>
      {eventType === 'event' && <h1>Event!!!</h1>}
      {eventType === 'meeting' && <h1>Meeting!!!</h1>}
      {/* {eventType === 'event' &&
        EVENT_DATA.map(event => <EventItem key={event.id} event={event} />)}
      {eventType === 'meeting' &&
        EVENT_DATA.map(event => <EventItem key={event.id} event={event} />)} */}
    </S.EventItemList>
  );
}

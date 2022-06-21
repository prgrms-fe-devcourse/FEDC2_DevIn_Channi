import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { EVENT_DATA } from 'assets';
import { EventItem } from 'components';
import { setFilteredEvent } from 'store';
import * as S from './style';

export function EventItemList() {
  const dispatch = useDispatch();
  const eventType = useSelector(state => state.eventType.type);
  const filterItem = useSelector(state => state.filterItem.filterItem);
  const filteredEvent = useSelector(state => state.filteredEvent.filteredEvent);
  const eventDatas = EVENT_DATA[eventType];

  console.log('filteredEvent', filteredEvent);

  useEffect(() => {
    filterItem.length !== 0 &&
      eventDatas.map(event => {
        filterItem.forEach(item => {
          if (event.tag.includes(item)) {
            dispatch(setFilteredEvent(event));
          }
        });
      });
  }, [filterItem]);

  useEffect(() => {
    console.log('after filteredEvent', filteredEvent);

    const temp = filteredEvent.map(event => {
      console.log(event.tag);
      console.log('fitlerItem', filterItem);
      if (event.tag === filterItem) {
        return event;
      }
    });
    console.log('rest', temp);
  }, [filteredEvent]);

  return (
    <S.EventItemList>
      {eventDatas.length !== 0
        ? eventDatas.map(event => (
            <EventItem key={nanoid()} event={event} eventType={eventType} />
          ))
        : eventDatas.map(event => (
            <EventItem key={nanoid()} event={event} eventType={eventType} />
          ))}
    </S.EventItemList>
  );
}

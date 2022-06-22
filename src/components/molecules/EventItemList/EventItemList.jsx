import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { EVENT_DATA } from 'assets';
import { EventItem } from 'components';
import * as S from './style';

export function EventItemList() {
  const eventType = useSelector(state => state.eventType.type);
  const filterItem = useSelector(state => state.filterItem.filterItem);
  const eventDatas = EVENT_DATA[eventType];

  const [list, setList] = useState([]);

  useEffect(() => {
    const newData = eventDatas
      .map(event => {
        let isSelected = true;
        for (let i = 0; i < filterItem.length; i += 1) {
          if (!event.tag.includes(filterItem[i])) {
            isSelected = false;
          }
        }
        if (isSelected) {
          return event;
        }
      })
      .filter(i => i !== undefined);
    setList([...newData]);
  }, [filterItem, eventType]);

  return (
    <S.EventItemList>
      {filterItem.length === 0
        ? eventDatas.map(event => (
            <EventItem key={nanoid()} event={event} eventType={eventType} />
          ))
        : list.map(event => (
            <EventItem key={nanoid()} event={event} eventType={eventType} />
          ))}
    </S.EventItemList>
  );
}

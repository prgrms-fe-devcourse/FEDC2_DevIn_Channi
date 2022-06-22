import { Span, TextLink, Tag, Paragraph } from 'components';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import * as S from './style';

export function EventItem({ event, eventType }) {
  const { tag, title, date, period, host, link } = event;
  return (
    <S.EventItem>
      <Span>
        {tag.map(t => (
          <Tag key={nanoid()} text={t} />
        ))}
      </Span>
      <Paragraph isTruncated lineClamp={1}>
        <TextLink href={link} type="anchor">
          {title}
        </TextLink>
      </Paragraph>
      {eventType !== 'meeting' && (
        <Span>{date === null ? `접수: ${period}` : `일정: ${date}`}</Span>
      )}
    </S.EventItem>
  );
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  eventType: PropTypes.string.isRequired,
};

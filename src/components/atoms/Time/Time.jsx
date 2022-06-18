import PropTypes from 'prop-types';
import { Span } from 'components';
import * as S from './style';

export function Time({ createdAt }) {
  const format = createdAtUTC => {
    const currentTime = new Date();
    const createdTime = new Date(createdAtUTC);
    const timeDiff = currentTime - createdTime;
    const oneMinute = 60 * 1000;
    const oneHour = 60 * oneMinute;
    const oneDay = 24 * oneHour;
    const oneWeek = 7 * oneDay;

    if (timeDiff > oneWeek) {
      return `${createdTime.getMonth() + 1}월 ${createdTime.getDate()}일`;
    }

    if (timeDiff > oneDay) {
      return `${Math.floor(timeDiff / oneDay)}일`;
    }

    if (timeDiff > oneHour) {
      return `${Math.floor(timeDiff / oneHour)}시간`;
    }

    if (timeDiff > oneMinute) {
      return `${Math.floor(timeDiff / oneMinute)}분`;
    }

    return '방금';
  };

  return (
    <S.Time dateTime={createdAt}>
      <Span fontSize="small" color="textSecond">
        {format(createdAt)}
      </Span>
    </S.Time>
  );
}

Time.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

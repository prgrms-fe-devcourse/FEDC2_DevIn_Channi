import PropTypes from 'prop-types';
import {
  Avatar,
  Paragraph,
  ProfileUserImage,
  ProfileUserName,
} from 'components';
import * as S from './style';

export function NotificationList({ userName, comment }) {
  return (
    <S.Container>
      <S.Content>
        <Avatar size="2.2rem" />
        <Paragraph fontSize="small" bold isTruncated={true} lineClamp={1}>
          {userName}
        </Paragraph>
        <span>{comment}</span>
      </S.Content>
    </S.Container>
  );
}

NotificationList.propTypes = {
  userName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

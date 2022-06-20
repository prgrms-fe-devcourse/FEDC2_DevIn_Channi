import PropTypes from 'prop-types';
import { ProfileUserImage, UserImgUpdateIcon } from 'components';
import * as S from './style';

export function ProfileImgUpdate({ refTarget, preview, onUpload, onChange }) {
  return (
    <>
      <S.Container onClick={onUpload}>
        <UserImgUpdateIcon />
        <ProfileUserImage userImage={preview} size={6} />
      </S.Container>
      <S.FileInput
        type="file"
        ref={refTarget}
        accept="image/*"
        onChange={onChange}
      />
    </>
  );
}

ProfileImgUpdate.propTypes = {
  refTarget: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLInputElement),
  }).isRequired,
  preview: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { ProfileUserImage, UserImgUpdateIcon } from 'components';
import * as S from './style';

export function ProfileImgUpdate({
  image,
  refTarget,
  preview,
  onUpload,
  onChange,
}) {
  return (
    <>
      <S.Container onClick={onUpload}>
        <UserImgUpdateIcon />
        <ProfileUserImage userImage={preview || image} size={6} />
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
  image: PropTypes.string.isRequired,
  refTarget: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLInputElement),
  }).isRequired,
  preview: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

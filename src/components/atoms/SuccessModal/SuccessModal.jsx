import Modal from 'react-modal';
import PropTypes from 'prop-types';
import * as S from './style';

export function SuccessModal({ showModal, onHideModal }) {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onHideModal}
      contentLabel="비밀번호 변경"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '10',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '0.625rem',
          backgroundColor: '#fff',
          padding: '2rem',
          width: '60%',
          height: '30%',
          maxWidth: '25rem',
          maxHeight: '12.5rem',
          zIndex: '9999999',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <S.P>프로필이 성공적으로 변경되었습니다.</S.P>
      <S.Button onClick={onHideModal}>확인</S.Button>
    </Modal>
  );
}

SuccessModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

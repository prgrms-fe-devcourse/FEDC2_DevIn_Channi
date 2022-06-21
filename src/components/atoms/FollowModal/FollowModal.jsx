import Modal from 'react-modal';
import PropTypes from 'prop-types';
import * as S from './style';

export function FollowModal ({children, showModal, onHideModal}) {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onHideModal}
      contentLabel="팔로우 목록"
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
          transform: 'translate(-50%, -50%)',
          borderRadius: '0.625rem',
          backgroundColor: '#fff',
          width: '100%',
          padding: 0,
          maxWidth: '25rem',
          maxHeight: '40rem',
          zIndex: '9999999',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <S.Close onClick={onHideModal}>x</S.Close>
      {children}
    </Modal>
  );
}

  FollowModal.propTypes = {
    children: PropTypes.node.isRequired,
    showModal: PropTypes.bool.isRequired,
    onHideModal: PropTypes.func.isRequired,
  };
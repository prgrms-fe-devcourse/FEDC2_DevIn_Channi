import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { IconBtn, RoundBtn, Span } from 'components';
import * as S from './style';

Modal.setAppElement('#root');

export function UrlModal({
  isModalOpen,
  closeModal,
  urlValue,
  onUrlChange,
  getOg,
}) {
  const inputRef = useRef(null);

  const onAfterOpen = () => {
    if (inputRef == null) return;
    inputRef.current.focus();
  };

  const onUrlSubmit = async event => {
    event.preventDefault();
    // form validation 필요
    closeModal();
    await getOg({ url: urlValue });
  };

  const onUrlInputChange = e => {
    setUrlInputValue(e.target.value);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: 'fixed',
          top: '0',
          bottom: '0',
          right: '0',
          left: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 1rem',
        },
        content: {
          position: 'static',
          padding: '0',
          maxWidth: '38rem',
          width: '100%',
          border: '1px solid #e6e6e6',
          borderRadius: '0.5rem',
          boxShadow: '0 0 0.25rem #f2f2f2',
          overflow: 'hidden',
        },
      }}
      contentLabel="URL 입력"
    >
      <S.Form autoComplete="off" onSubmit={onUrlSubmit}>
        <S.Flex>
          <S.Label htmlFor="url">
            <Span bold>URL</Span>
          </S.Label>
          <IconBtn type="button" onClick={closeModal} icon="x" />
        </S.Flex>
        <S.Flex>
          <S.Input
            type="url"
            name="url"
            id="url"
            placeholder="https://"
            // validation 필요
            // pattern="https://.*"
            ref={inputRef}
            value={urlValue}
            onChange={onUrlChange}
          />
          <RoundBtn type="submit" highlight>
            입력
          </RoundBtn>
        </S.Flex>
      </S.Form>
    </Modal>
  );
}

UrlModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  urlValue: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  getOg: PropTypes.func.isRequired,
};

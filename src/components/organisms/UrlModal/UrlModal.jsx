import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IconBtn, RoundBtn, Span } from 'components';

import * as S from './style';

export function UrlModal({
  urlInputValue,
  setUrlInputValue,
  getOg,
  toggleUrlModal,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef == null) return;
    inputRef.current.focus();
  }, [inputRef]);

  const onUrlSubmit = async event => {
    event.preventDefault();
    await getOg({ url: urlInputValue });
  };

  const onUrlInputChange = e => {
    setUrlInputValue(e.target.value);
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) toggleUrlModal(false);
  };

  const onExitBtnClick = () => {
    // icon 변경
    toggleUrlModal(false);
  };

  return (
    <S.Backdrop onClick={onBackdropClick}>
      <S.Form autoComplete="off" onSubmit={onUrlSubmit}>
        <S.Flex>
          <S.Label htmlFor="url">
            <Span bold>URL</Span>
          </S.Label>
          <IconBtn type="button" onClick={onExitBtnClick} icon="menus" />
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
            value={urlInputValue}
            onChange={onUrlInputChange}
          />
          <RoundBtn type="submit" highlight>
            입력
          </RoundBtn>
        </S.Flex>
      </S.Form>
    </S.Backdrop>
  );
}

UrlModal.propTypes = {
  urlInputValue: PropTypes.string.isRequired,
  setUrlInputValue: PropTypes.func.isRequired,
  getOg: PropTypes.func.isRequired,
  toggleUrlModal: PropTypes.func.isRequired,
};

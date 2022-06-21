import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { PostType } from 'types';
import { UrlModal, OgPreview, IconBtn, RoundBtn, Paragraph } from 'components';
import { ogApi } from 'api';
import * as S from './style';

const useInput = initialState => {
  const [inputValue, setInputValue] = useState(initialState);

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const resetInput = () => {
    setInputValue('');
  };

  return { inputValue, onInputChange, resetInput };
};

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

const useOg = () => {
  const [og, setOg] = useState(null);
  const [isOgLoading, setIsOgLoading] = useState(false);
  const [isOgError, setIsOgError] = useState(false);
  const [ogErrorMessage, setOgErrorMessage] = useState('');

  const resetOg = () => {
    setOg(null);
    setIsOgLoading(false);
    setIsOgError(false);
    setOgErrorMessage('');
  };

  const isDataBlank = data => {
    let result = true;
    Object.values(data).forEach(value => {
      if (value !== '') {
        result = false;
      }
    });
    return result;
  };

  const getOg = async ({ url }) => {
    resetOg();
    try {
      setIsOgLoading(true);
      const data = await ogApi.post({ url });
      setIsOgLoading(false);
      if (isDataBlank(data)) {
        setIsOgError(true);
        setOgErrorMessage('페이지 정보가 없습니다');
        return;
      }
      setOg(data);
    } catch (error) {
      console.error(error.message);
      setIsOgLoading(false);
      setIsOgError(true);
      setOgErrorMessage('페이지 정보를 불러올 수 없습니다');
    }
  };

  return { og, isOgLoading, isOgError, ogErrorMessage, getOg, resetOg };
};

export function PostFormPage({ post }) {
  const { inputValue: contentValue, onInputChange: onContentChange } =
    useInput('');
  const {
    inputValue: urlValue,
    onInputChange: onUrlChange,
    resetInput: resetUrlInput,
  } = useInput('');
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal();
  const { og, isOgLoading, isOgError, ogErrorMessage, getOg, resetOg } =
    useOg();

  const onPostSubmit = e => {
    e.preventDefault();

    // Json.stringify(data) -> title

    // 라우트에 따라 create 또는 update
  };

  const onBackBtnClick = () => {
    navigate(-1);
  };

  const resetUrlAndOg = () => {
    resetUrlInput();
    resetOg();
  };

  return (
    <S.Container>
      <S.PostForm onSubmit={onPostSubmit} autoComplete="off">
        <S.Header>
          <IconBtn type="button" onClick={onBackBtnClick} icon="chevron" />
          <Paragraph bold>게시물 작성/수정</Paragraph>
        </S.Header>
        <S.Textarea
          value={contentValue}
          onChange={onContentChange}
          placeholder="공유하고 싶은 생각이 있으신가요?"
        />

        <OgPreview
          isOgLoading={isOgLoading}
          isOgError={isOgError}
          og={og}
          ogErrorMessage={ogErrorMessage}
          resetUrlAndOg={resetUrlAndOg}
        />

        <S.Footer>
          <IconBtn type="button" onClick={openModal} icon="hyperlink" />
          <RoundBtn type="submit" highlight>
            완료
          </RoundBtn>
        </S.Footer>
      </S.PostForm>

      <UrlModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        urlValue={urlValue}
        onUrlChange={onUrlChange}
        getOg={getOg}
      />
    </S.Container>
  );
}

PostFormPage.propTypes = {
  post: PostType,
};

PostFormPage.defaultProps = {
  post: null,
};

import { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import { PostType } from 'types';
import { UrlModal, IconBtn, RoundBtn, Paragraph, Icon, Span } from 'components';
import { ogApi } from 'api';
import * as S from './style';

// og: {
//   title: '',
//   description: '',
//   image: '',
//   keyword: '',
//   url: '',
// }

export function PostFormPage({ post }) {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [urlInputValue, setUrlInputValue] = useState('');
  const [og, setOg] = useState(null);
  const [isOgLoading, setOgLoading] = useState(false);
  const [isOgError, setIsOgError] = useState(false);

  const toggleUrlModal = bool => {
    setIsUrlModalOpen(bool);
  };

  const getOg = async ({ url }) => {
    try {
      setOgLoading(true);
      toggleUrlModal(false);
      const data = await ogApi.post({ url });
      setOgLoading(false);
      setUrlInputValue('');
      setOg(data);
    } catch (error) {
      console.error(error.message);
      setOgLoading(false);
      setIsOgError(true);
    }
  };

  const onPostSubmit = e => {
    e.preventDefault();

    // Json.stringify(data) -> title

    // 라우트에 따라 create 또는 update
  };

  const onTextareaChange = e => {
    setTextAreaValue(e.target.value);
  };

  const onBackBtnClick = () => {
    // 뒤로 가기
  };

  const onUrlBtnClick = () => {
    setIsUrlModalOpen(!isUrlModalOpen);
    // urlInputRef.current.focus();

    // 1. og 서버에 보내기(Og 로딩)
    // 2. data 받으면 set og(Og 미리보기)
    // 3. data 받으면 set Data
  };

  const onDelOgBtnClick = () => {
    setOg(null);
  };

  return (
    <S.Container>
      <S.PostForm onSubmit={onPostSubmit} autoComplete="off">
        <S.Header>
          <IconBtn type="button" onClick={onBackBtnClick} icon="chevron" />
          <Paragraph bold>게시물 작성/수정</Paragraph>
        </S.Header>
        <S.Textarea
          value={textAreaValue}
          onChange={onTextareaChange}
          placeholder="공유하고 싶은 생각이 있으신가요?"
        />
        {(isOgLoading || isOgError) && (
          <S.Box>
            {isOgLoading && <Icon icon="spinner" />}
            {isOgError && <Span>에러</Span>}
          </S.Box>
        )}

        {og != null && (
          <S.Flex>
            <S.StyledOg og={og} />
            <IconBtn type="button" onClick={onDelOgBtnClick} icon="menus" />
          </S.Flex>
        )}
        <S.Footer>
          <IconBtn type="button" onClick={onUrlBtnClick} icon="hyperlink" />
          <RoundBtn type="submit" highlight>
            완료
          </RoundBtn>
        </S.Footer>
      </S.PostForm>
      {isUrlModalOpen && (
        <UrlModal
          urlInputValue={urlInputValue}
          setUrlInputValue={setUrlInputValue}
          getOg={getOg}
          toggleUrlModal={toggleUrlModal}
        />
      )}
    </S.Container>
  );
}

PostFormPage.propTypes = {
  post: PostType,
};

PostFormPage.defaultProps = {
  post: null,
};

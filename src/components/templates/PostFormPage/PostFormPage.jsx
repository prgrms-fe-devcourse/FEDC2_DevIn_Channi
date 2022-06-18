import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconBtn, RoundBtn, Paragraph } from 'components';
import * as S from './style';

export function PostFormPage() {
  const [data, setData] = useState({});
  const [content, setContent] = useState('');
  const [og, setOg] = useState({
    title: '',
    description: '',
    image: '',
    keyword: '',
    url: '',
  });

  const onFormSubmit = e => {
    e.preventDefault();

    // Json.stringify(data) -> title

    // 라우트에 따라 create 또는 update
  };

  const onTextareaChange = e => {
    setContent(e.target.value);

    // throttle 할 수 있는지 확인 필요
    // set data
  };

  const onBackBtnClick = () => {
    // 뒤로 가기
  };

  const onUrlBtnClick = () => {
    // 1. og 서버에 보내기(Og 로딩)
    // 2. data 받으면 set og(Og 미리보기)
    // 3. data 받으면 set Data
  };

  const onSubmitBtnClick = () => {};

  return (
    <S.Form onSubmit={onFormSubmit}>
      <S.Header>
        <IconBtn type="button" onClick={onBackBtnClick} icon="chevron" />
        <Paragraph bold>게시물 작성/수정</Paragraph>
      </S.Header>
      <S.Textarea
        value={content}
        onChange={onTextareaChange}
        placeholder="공유하고 싶은 생각이 있으신가요?"
      />
      <S.Footer>
        <IconBtn type="button" onClick={onUrlBtnClick} icon="hyperlink" />
        <RoundBtn type="submit" onClick={onSubmitBtnClick} highlight>
          완료
        </RoundBtn>
      </S.Footer>
    </S.Form>
  );
}

PostFormPage.propTypes = {};

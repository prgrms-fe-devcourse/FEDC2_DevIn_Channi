import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { OgCard, TextBtn, Paragraph, Span } from 'components';
// 포스트 생성 완료 후 삭제(임시 데이터)
// import { ogData } from './data';
import * as S from './style';

export function PostBody({ postBody }) {
  const [content, setContent] = useState('');
  const [og, setOg] = useState(null);

  useEffect(() => {
    const { content: rawContent, og: rawOg } = JSON.parse(postBody);

    setContent(rawContent);
    setOg(rawOg);
  }, [postBody]);

  const [isContentTruncated, setIsContentTruncated] = useState(true);

  const onViewMoreBtnClick = () => {
    setIsContentTruncated(false);
  };

  return (
    <S.Body>
      <S.Content>
        <Paragraph isTruncated={isContentTruncated} lineClamp={4}>
          {content}
        </Paragraph>
        {isContentTruncated && (
          <TextBtn type="button" onClick={onViewMoreBtnClick}>
            <Span color="textSecond">더보기</Span>
          </TextBtn>
        )}
      </S.Content>
      {og && <OgCard og={og} />}
    </S.Body>
  );
}

PostBody.propTypes = {
  postBody: PropTypes.string.isRequired,
};

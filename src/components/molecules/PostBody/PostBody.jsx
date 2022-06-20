import { useState } from 'react';
import PropTypes from 'prop-types';
import { Og, TextBtn, Paragraph, Span } from 'components';
// 포스트 생성 완료 후 삭제(임시 데이터)
import { ogData } from './data';
import * as S from './style';

export function PostBody({ postContent }) {
  const [isContentTruncated, setIsContentTruncated] = useState(true);

  const onViewMoreBtnClick = () => {
    setIsContentTruncated(false);
  };

  return (
    <S.Body>
      <S.Content>
        <Paragraph isTruncated={isContentTruncated} lineClamp={4}>
          {postContent}
        </Paragraph>
        {isContentTruncated && (
          <TextBtn type="button" onClick={onViewMoreBtnClick}>
            <Span color="textSecond">더보기</Span>
          </TextBtn>
        )}
      </S.Content>
      <Og og={ogData} />
    </S.Body>
  );
}

PostBody.propTypes = {
  postContent: PropTypes.string.isRequired,
};

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Og, TextBtn, Paragraph, Span } from 'components';
import * as S from './style';

export function PostBody({ postContent, og }) {
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
      <Og og={og} />
    </S.Body>
  );
}

PostBody.propTypes = {
  postContent: PropTypes.string.isRequired,
  og: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

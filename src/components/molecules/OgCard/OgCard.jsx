import PropTypes from 'prop-types';
import { WrapperLink, Image, Paragraph } from 'components';
import { OgType } from 'types';
import defaultThumbnail from 'assets/images/default-thumbnail.jpg';
import * as S from './style';

export function OgCard({ className, og }) {
  const { title, description, image: imageUrl, url: siteUrl } = og;

  const onImgError = e => {
    e.target.src = defaultThumbnail;
  };

  return (
    <WrapperLink
      className={className}
      type="anchor"
      href={siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      borderRadius="0.5rem"
    >
      <S.Article>
        <S.Flex>
          <S.StyledParagraph fontSize="small" bold isTruncated lineClamp={2}>
            {title}
          </S.StyledParagraph>
          <Paragraph
            fontSize="small"
            color="textSecond"
            isTruncated
            lineClamp={2}
          >
            {description}
          </Paragraph>
        </S.Flex>
        <Image
          src={imageUrl || defaultThumbnail}
          alt=""
          height="100%"
          aspectRatio="4 / 3"
          onError={onImgError}
        />
      </S.Article>
    </WrapperLink>
  );
}

OgCard.propTypes = {
  className: PropTypes.string,
  og: OgType.isRequired,
};

OgCard.defaultProps = { className: '' };

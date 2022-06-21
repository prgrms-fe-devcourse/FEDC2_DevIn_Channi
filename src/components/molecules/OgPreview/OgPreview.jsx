import PropTypes from 'prop-types';
import { OgType } from 'types';
import { IconBtn, Icon, Span } from 'components';
import * as S from './style';

export function OgPreview({
  isOgLoading,
  isOgError,
  og,
  ogErrorMessage,
  resetUrlAndOg,
}) {
  return (
    <>
      {isOgLoading && (
        <S.Flex>
          <S.Box>
            <Icon icon="spinner" />
          </S.Box>
        </S.Flex>
      )}
      {isOgError && (
        <S.Flex>
          <S.Box>
            <Span>{ogErrorMessage}</Span>
          </S.Box>
          <IconBtn type="button" onClick={resetUrlAndOg} icon="x" />{' '}
        </S.Flex>
      )}
      {!isOgLoading && !isOgError && og != null && (
        <S.Flex>
          <S.StyledOgCard og={og} />
          <IconBtn type="button" onClick={resetUrlAndOg} icon="x" />{' '}
        </S.Flex>
      )}
    </>
  );
}

OgPreview.propTypes = {
  isOgLoading: PropTypes.bool.isRequired,
  isOgError: PropTypes.bool.isRequired,
  og: OgType,
  ogErrorMessage: PropTypes.string.isRequired,
  resetUrlAndOg: PropTypes.func.isRequired,
};

OgPreview.defaultProps = {
  og: null,
};

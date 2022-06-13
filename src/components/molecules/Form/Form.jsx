import PropTypes from 'prop-types';
import { FormInput, FormBtn, FormLink } from 'components';
import * as S from './style';

export function Form({ info }) {
  const {
    title,
    inputs,
    isAuth,
    link: { introText, linkText, linkPath },
  } = info;
  const onClick = () => console.log('클릭');
  return (
    <S.Container>
      {isAuth && <S.Title>{title}</S.Title>}
      {inputs.map(input => (
        <FormInput
          key={input.id}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      ))}
      <FormBtn onClick={onClick} text="로그인" />
      {isAuth && (
        <FormLink
          introText={introText}
          linkText={linkText}
          linkPath={linkPath}
        />
      )}
    </S.Container>
  );
}
Form.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }),
    ).isRequired,
    isAuth: PropTypes.bool.isRequired,
    link: PropTypes.shape({
      introText: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkPath: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

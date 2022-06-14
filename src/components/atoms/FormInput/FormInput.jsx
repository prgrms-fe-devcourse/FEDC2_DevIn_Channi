import PropTypes from 'prop-types';
import * as S from './style';

export function FormInput({ type, name, placeholder }) {
  return (
    <S.Container>
      <label htmlFor={name}>
        <span>{name}</span>
      </label>
      <input
        type={type}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
      />
    </S.Container>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

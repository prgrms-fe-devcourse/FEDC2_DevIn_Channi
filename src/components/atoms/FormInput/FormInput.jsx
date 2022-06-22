import PropTypes from 'prop-types';
import * as S from './style';

export function FormInput({ input, onChange }) {
  const { type, title, name, placeholder } = input;

  return (
    <S.Container>
      <label htmlFor={name}>
        <span>{title}</span>
      </label>
      <input
        type={type}
        name={name}
        value={input.value || ''}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
      />
    </S.Container>
  );
}

FormInput.propTypes = {
  input: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

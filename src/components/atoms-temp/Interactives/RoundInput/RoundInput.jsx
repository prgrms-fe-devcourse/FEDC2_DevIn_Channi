import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export function RoundInput({ name, label, placeholder, onChange }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const onInputChange = () => {
    // throttle event
    // set inputValue(inputRef.current.value)
    // onChange(inputValue)
  };

  return (
    <S.Label>
      <span className="visually-hidden">{label}</span>
      <S.Input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onInputChange}
        ref={inputRef}
      />
    </S.Label>
  );
}

RoundInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

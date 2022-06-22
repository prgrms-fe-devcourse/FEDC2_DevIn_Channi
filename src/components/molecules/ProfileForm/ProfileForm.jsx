import PropTypes from 'prop-types';
import { FormInput, FormBtn } from 'components';
import * as S from './style';

export function ProfileForm({ info, onChange }) {
  const { title, inputs, isAuth } = info;
  const onClick = () => console.log('클릭');
  return (
    <S.Container>
      {isAuth &&
        inputs.map(input => (
          <FormInput key={input.id} input={input} onChange={onChange} />
        ))}
      <FormBtn onClick={onClick} text={title} />
    </S.Container>
  );
}

ProfileForm.propTypes = {
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
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

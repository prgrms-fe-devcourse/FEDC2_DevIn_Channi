import PropTypes from 'prop-types';

export function FormInput({ type, name }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} autoComplete="off" required />
    </>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

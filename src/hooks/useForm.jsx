import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthValidation } from 'store';

export function useForm({ initialState, authCallback }) {
  const dispatch = useDispatch();
  const error = useSelector(state => state.authValidation.text);
  const [formData, setFormData] = useState({ ...initialState });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (error) dispatch(setAuthValidation(''));
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await authCallback({ formData });

      if (response.status !== 200) {
        throw new Error(response.message);
      }

      return response;
    } catch (err) {
      console.error(err);
    }
  };

  const onUpdateSubmit = async e => {
    e.preventDefault();
    try {
      authCallback();
    } catch (err) {
      console.error(err);
    }
  };

  return { formData, onChange, onSubmit, onUpdateSubmit };
}

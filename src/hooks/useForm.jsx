import { useState } from 'react';
import { auth } from 'api';

export function useForm({ initialState, authType }) {
  const [formData, setFormData] = useState(initialState);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await auth[authType]({ ...formData });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return { onChange, onSubmit };
}

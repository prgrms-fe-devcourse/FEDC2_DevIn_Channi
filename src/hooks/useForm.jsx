import { useState } from 'react';

export function useForm({ initialState, authCallback }) {
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
      const response = await authCallback({ formData });
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  return { onChange, onSubmit };
}

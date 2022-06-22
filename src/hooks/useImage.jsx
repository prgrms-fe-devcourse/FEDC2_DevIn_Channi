import { useState, useRef, useEffect } from 'react';

export function useImage() {
  const ref = useRef();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const onUpload = () => ref.current.click();

  const onChange = e => {
    const [file] = e.target.files;
    const isImage = /image/g.test(file.type);

    if (file && isImage) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return { ref, preview, onUpload, onChange };
}

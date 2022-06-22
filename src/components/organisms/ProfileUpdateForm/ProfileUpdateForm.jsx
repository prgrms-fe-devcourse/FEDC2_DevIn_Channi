import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProfileImgUpdate, Form, SuccessModal, Loading } from 'components';
import { setAuthValidation, setUser } from 'store';
import { useForm, useCookie, useImage } from 'hooks';
import { auth } from 'api';
import * as S from './style';

const validatePassword = async ({
  dispatch,
  password,
  checkPassword,
  token,
}) => {
  if (password && checkPassword) {
    if (password !== checkPassword) {
      dispatch(setAuthValidation('비밀번호가 일치하지 않습니다.'));
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    if (password.length < 8) {
      dispatch(setAuthValidation('비밀번호는 8자리 이상이어야 합니다.'));
      throw new Error('비밀번호는 8자리 이상이어야 합니다.');
    }

    const response = await auth.changePassword({
      token,
      newPassword: password,
    });

    return response;
  }

  if (password || checkPassword) {
    if (!password) {
      dispatch(setAuthValidation('비밀번호를 입력해주세요.'));
      throw new Error('비밀번호를 입력해주세요.');
    } else if (!checkPassword) {
      dispatch(setAuthValidation('비밀번호를 확인해주세요.'));
      throw new Error('비밀번호를 확인해주세요.');
    }
  }
};

const validateName = async ({ dispatch, name, token }) => {
  if (!name) {
    dispatch(setAuthValidation('이름을 입력해주세요.'));
    throw new Error('이름을 입력해주세요.');
  }

  if (name.length > 15) {
    dispatch(setAuthValidation('이름은 15자리를 넘을 수 없습니다.'));
    throw new Error('이름은 15자리를 넘을 수 없습니다.');
  }

  const response = await auth.changeName({
    token,
    newName: name,
  });

  return response;
};

const uploadImage = async ({ token, prevImg, newImg }) => {
  if (newImg && prevImg !== newImg) {
    return await auth.uploadAvatar({
      token,
      avatar: newImg,
    });
  }
};

export function ProfileUpdateForm({ fullName, image }) {
  const dispatch = useDispatch();
  const { getCookie } = useCookie();
  const { ref, preview, onUpload, onChange: onChangeImg } = useImage();
  const navigate = useNavigate();

  const initialState = {
    fullName,
    password: '',
    checkPassword: '',
  };

  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => setShowModal(true);
  const onHideModal = () => {
    setShowModal(false);
    navigate(-1, { replace: true });
  };

  const { formData, onChange, onUpdateSubmit } = useForm({
    initialState,
    authCallback: async () => {
      try {
        setIsLoading(true);
        const { fullName: name, password, checkPassword } = formData;

        await uploadImage({
          prevImg: image,
          newImg: preview,
          token: getCookie(),
        });

        await validatePassword({
          dispatch,
          password,
          checkPassword,
          token: getCookie(),
        });

        await validateName({
          dispatch,
          name,
          token: getCookie(),
        });

        const newUser = await auth.getUser({ token: getCookie() });

        dispatch(setUser(newUser));

        onShowModal();
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const info = {
    title: '변경',
    inputs: [
      {
        id: 1,
        type: 'name',
        title: '이름',
        name: 'fullName',
        value: formData.fullName,
        placeholder: '사용자이름',
      },
      {
        id: 2,
        type: 'password',
        title: '비밀번호',
        name: 'password',
        value: formData.password,
        placeholder: '새 비밀번호를 입력해주세요',
      },
      {
        id: 3,
        type: 'password',
        title: '비밀번호 확인',
        name: 'checkPassword',
        value: formData.checkPassword,
        placeholder: '새 비밀번호를 한번 더 입력해주세요',
      },
    ],
    isAuth: false,
  };

  return (
    <>
      <S.ProfileUpdateForm>
        <ProfileImgUpdate
          image={image}
          refTarget={ref}
          preview={preview}
          onUpload={onUpload}
          onChange={onChangeImg}
        />
        <Form info={info} onChange={onChange} onSubmit={onUpdateSubmit} />
      </S.ProfileUpdateForm>
      {isLoading &&
        ReactDOM.createPortal(
          <S.LoadingWrapper>
            <Loading />
          </S.LoadingWrapper>,
          document.querySelector('#backdrop'),
        )}
      {showModal && (
        <SuccessModal showModal={showModal} onHideModal={onHideModal} />
      )}
    </>
  );
}

ProfileUpdateForm.propTypes = {
  fullName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

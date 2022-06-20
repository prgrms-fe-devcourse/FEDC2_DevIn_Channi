import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ProfileImgUpdate, ProfileForm, Form } from 'components';
import { setAuthValidation, setUser } from 'store';
import { useForm, useCookie } from 'hooks';
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

export function ProfileUpdateForm({ fullName }) {
  const dispatch = useDispatch();
  const { getCookie } = useCookie();

  const initialState = {
    fullName,
    password: '',
    checkPassword: '',
  };

  const { formData, onChange, onUpdateSubmit } = useForm({
    initialState,
    authCallback: async () => {
      const { fullName: name, password, checkPassword } = formData;

      await validatePassword({
        dispatch,
        password,
        checkPassword,
        token: getCookie(),
      });

      const changedUserInfo = await validateName({
        dispatch,
        name,
        token: getCookie(),
      });

      dispatch(setUser(changedUserInfo));
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
    <S.ProfileUpdateForm>
      <ProfileImgUpdate />
      <Form info={info} onChange={onChange} onSubmit={onUpdateSubmit} />
    </S.ProfileUpdateForm>
  );
}

ProfileUpdateForm.propTypes = {
  fullName: PropTypes.string.isRequired,
};

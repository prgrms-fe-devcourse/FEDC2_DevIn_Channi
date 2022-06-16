import { ProfileImgUpdate, ThreeForm } from 'components';
import * as S from './style';

export function ProfileUpdateForm() {
  const info = {
    title: "변경",
    inputs: [
      {
        id: 1,
        type: 'name',
        name: '이름',
        placeholder: '사용자이름',
      },
      {
        id: 2,
        type: 'password',
        name: '비밀번호 변경',
        placeholder: '새 비밀번호를 입력해주세요',
      },
      {
        id: 3,
        type: 'password',
        name: '비밀번호 확인',
        placeholder: '새 비밀번호를 한번 더 입력해주세요',
      },
    ],
    isAuth: true,
  };

  return (
    <S.ProfileUpdateForm>
      <ProfileImgUpdate />
      <ThreeForm info={info}/>
    </S.ProfileUpdateForm>
  );
}
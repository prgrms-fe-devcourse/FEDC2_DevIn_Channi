import { useNavigate } from 'react-router-dom';
import * as S from './style';

export function ProfileUpdateBtn() {
  const navigate = useNavigate();
  const ProfileUpdatePage = () => {
    navigate('/profiles/update');
  };
  return (
    <S.ProfileUpdateBtn onClick={() => ProfileUpdatePage()}>
      <S.CustomIcon icon="config" />
    </S.ProfileUpdateBtn>
  );
}

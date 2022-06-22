import { useParams } from 'react-router-dom';
import { NavTemplate, ProfileArea } from 'components';

export function Profile() {
  const { id } = useParams();
  return (
    <NavTemplate>
      <ProfileArea userId={id} />
    </NavTemplate>
  );
}

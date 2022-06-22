import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavTemplate, NotificationArea } from 'components';

export function Notification() {
  const { notifications } = useSelector(state => state.user.user);

  const [data, setData] = useState(notifications);

  useEffect(() => {
    setData(notifications);
  }, [notifications]);

  if (!data) return <div>null</div>;

  return (
    <NavTemplate>
      <NotificationArea notifications={data} />
    </NavTemplate>
  );
}

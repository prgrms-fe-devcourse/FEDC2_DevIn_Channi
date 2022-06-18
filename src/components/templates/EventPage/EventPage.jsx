import { Header, Footer, EventHeader, EventItemList } from 'components';
import * as S from './style';

export function EventPage() {
  return (
    <S.EventPage>
      <Header />
      <EventHeader />
      <EventItemList />
      <Footer />
    </S.EventPage>
  );
}

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchBar, SearchResultTab, ProfileList } from 'components';
import * as S from './style';

export function SearchArea() {
  const [content, setContent] = useState('profile');

  const searchPostsResult = useSelector(state => state.search.post);

  const getTabContent = tabname => {
    setContent(tabname);
  };


  const selectContent = {
    profile: <ProfileList />,
    post: <S.Container>
      {console.log(searchPostsResult)}
      Post
    </S.Container>,
  };

  return (
    <>
      <S.SearchArea>
        <SearchBar />
        <SearchResultTab getTabContent={getTabContent} />
      </S.SearchArea>
      {content && <div>{selectContent[content]}</div>}
    </>
  );
}

import { ProfileList, SearchResultItem } from 'components';
import { useState } from 'react';
import * as S from './style';

export function SearchResultTab() {
  const [content, setContent] = useState("profile");

  const getData = (itemname) => {
    setContent(itemname)  
  }

  const selectContent = {
    profile: <ProfileList/>,
    post: <div>Post</div>
  }
  return (
    <>
      <S.SearchResultTab>
        {/* itemNum => User, Post array length */}
        <SearchResultItem
          getData={getData}
          name="profile"
          itemName="프로필"
          itemNum="100+"
        />
        <SearchResultItem
          getData={getData}
          name="post"
          itemName="게시물"
          itemNum="100+"
        />
      </S.SearchResultTab>
      {content && <div>{selectContent[content]}</div>}
    </>
  );
}

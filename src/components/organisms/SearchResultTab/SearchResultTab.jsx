import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchResultItem } from 'components';
import * as S from './style';

export function SearchResultTab({ getTabContent, allPostNum }) {
  const [content, setContent] = useState('profile');

  const allUsers = useSelector(state => state.search.alluser) || [];
  const searchUsersResult = useSelector(state => state.search.user);
  const searchPostsResult = useSelector(state => state.search.post);
  console.log(searchPostsResult);

  const getTabItem = itemname => {
    console.log(itemname);
    setContent(itemname);
  };

  useEffect(() => {
    getTabContent(content);
  }, [getTabContent, content]);
  
  return (
    <S.SearchResultTab>
      <SearchResultItem
        getTabItem={getTabItem}
        name="profile"
        itemName="프로필"
        itemNum={searchUsersResult ? searchUsersResult.length : allUsers.length}
      />
      <SearchResultItem
        getTabItem={getTabItem}
        name="post"
        itemName="게시물"
        itemNum={searchPostsResult ? searchPostsResult.length : allPostNum}
      />
    </S.SearchResultTab>
  );
}

SearchResultTab.propTypes = {
  getTabContent: PropTypes.func,
  allPostNum: PropTypes.number,
};

SearchResultTab.defaultProps = {
  getTabContent: {},
  allPostNum: 0,
};

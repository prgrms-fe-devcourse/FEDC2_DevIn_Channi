import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchResultItem } from 'components';
import * as S from './style';

export function SearchResultTab({ getTabContent }) {
  const [content, setContent] = useState('profile');

  const allUsers = useSelector(state => state.allUsers.value);
  const searchUsersResult = useSelector(state => state.searchUsers.value);
  const searchPostsResult = useSelector(state => state.searchPosts.value);

  const getItem = itemname => {
    setContent(itemname);
  };

  useEffect(() => {
    getTabContent(content);
  }, [getTabContent, content]);
  return (
    <S.SearchResultTab>
      <SearchResultItem
        getItem={getItem}
        name="profile"
        itemName="프로필"
        itemNum={
          searchUsersResult ? searchUsersResult.length : allUsers.length
        }
      />
      <SearchResultItem
        getItem={getItem}
        name="post"
        itemName="게시물"
        itemNum={
            searchPostsResult &&
            searchPostsResult.length ||
          '100+'
        }
      />
    </S.SearchResultTab>
  );
}

SearchResultTab.propTypes = {
  getTabContent: PropTypes.func,
};

SearchResultTab.defaultProps = {
  getTabContent: {},
};

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  SearchBar,
  SearchResultTab,
  ProfileList,
  PostList,
  SearchNone,
} from 'components';
import { postApi } from 'api';
import * as S from './style';

export function SearchArea() {
  const searchPostsResult = useSelector(state => state.search.post);
  const [content, setContent] = useState('profile');
  const [posts, setPosts] = useState([]);
  const [postsNum, setPostsNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchData, setIsSearchData] = useState(false);

  useEffect(() => {
    if (searchPostsResult) {
      if (searchPostsResult.length === 0) {
        setContent('none');
        setPosts(searchPostsResult);
        setIsSearchData(true);
      } else {
        setIsLoading(true);
        setPosts(searchPostsResult);
        setIsSearchData(true);
        setIsLoading(false);
      }
    } else {
      setIsSearchData(false);
    }
  }, [searchPostsResult]);

  useEffect(() => {
    if (!isSearchData) {
      (async () => {
        try {
          setIsLoading(true);
          const data = await postApi.getAll({
            params: {
              offset: '',
              limit: '',
            },
          });
          setPosts(data);
          setPostsNum(data.length);
          setIsLoading(false);
        } catch (e) {
          console.error(e.message);
        }
      })();
    }
  }, [isSearchData]);

  const getTabContent = tabname => {
    setContent(tabname);
  };

  const selectContent = {
    profile: <ProfileList />,
    post: <PostList posts={posts} isLoading={isLoading} />,
    none: <SearchNone />,
  };

  return (
    <S.Container>
      <S.SearchArea>
        <SearchBar />
        <SearchResultTab getTabContent={getTabContent} allPostNum={postsNum} />
      </S.SearchArea>
      {content && <div>{selectContent[content]}</div>}
    </S.Container>
  );
}

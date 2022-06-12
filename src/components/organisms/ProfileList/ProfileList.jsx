// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
import { Profile, SearchNone } from 'components';
import * as S from './style';

const User = [
    {
      _id: 1,
      image: "",
      fullName: "이름이 엄청나게 긴 사용자랍니다!!",
    },
    {
      _id: 2,
      image: "https://picsum.photos/48",
      fullName: "사용자2",
    },
    {
      _id: 3,
      image: "https://picsum.photos/48",
      fullName: "사용자3",
    },
    {
      _id: 4,
      image: "https://picsum.photos/48",
      fullName: "사용자4",
    },
    {
      _id: 5,
      image: "https://picsum.photos/48",
      fullName: "사용자5",
    },
    {
      _id: 6,
      image: "https://picsum.photos/48",
      fullName: "사용자6",
    },
    {
      _id: 7,
      image: "https://picsum.photos/48",
      fullName: "사용자7",
    },
    {
      _id: 8,
      image: "https://picsum.photos/48",
      fullName: "사용자8",
    },
    {
      _id: 9,
      image: "https://picsum.photos/48",
      fullName: "사용자9",
    },
    {
      _id: 10,
      image: "https://picsum.photos/48",
      fullName: "사용자10",
    },
    {
      _id: 11,
      image: "https://picsum.photos/48",
      fullName: "사용자11",
    },
    {
      _id: 12,
      image: "https://picsum.photos/48",
      fullName: "사용자12",
    },
    {
      _id: 13,
      image: "https://picsum.photos/48",
      fullName: "사용자13",
    },
    {
      _id: 14,
      image: "https://picsum.photos/48",
      fullName: "사용자14",
    },
    {
      _id: 15,
      image: "https://picsum.photos/48",
      fullName: "사용자15",
    },
    {
      _id: 16,
      image: "https://picsum.photos/48",
      fullName: "사용자16",
    },
    {
      _id: 17,
      image: "https://picsum.photos/48",
      fullName: "사용자17",
    },
    {
      _id: 18,
      image: "https://picsum.photos/48",
      fullName: "사용자18",
    },
    {
      _id: 19,
      image: "https://picsum.photos/48",
      fullName: "사용자19",
    },
    {
      _id: 20,
      image: "https://picsum.photos/48",
      fullName: "사용자20",
    },
    {
      _id: 21,
      image: "https://picsum.photos/48",
      fullName: "사용자21",
    },
    {
      _id: 22,
      image: "https://picsum.photos/48",
      fullName: "사용자22",
    },
    {
      _id: 23,
      image: "https://picsum.photos/48",
      fullName: "사용자23",
    },
    {
      _id: 24,
      image: "https://picsum.photos/48",
      fullName: "사용자24",
    },
    {
      _id: 25,
      image: "https://picsum.photos/48",
      fullName: "사용자25",
    },
    {
      _id: 26,
      image: "https://picsum.photos/48",
      fullName: "사용자26",
    },
    {
      _id: 27,
      image: "https://picsum.photos/48",
      fullName: "사용자27",
    },
    {
      _id: 28,
      image: "https://picsum.photos/48",
      fullName: "사용자28",
    },
    {
      _id: 29,
      image: "https://picsum.photos/48",
      fullName: "사용자29",
    },
    {
      _id: 30,
      image: "https://picsum.photos/48",
      fullName: "사용자30",
    },
];

export function ProfileList() {
  // const [ref, inView] = useInView();
  // useEffect(() => {
  //   if(inView) {

  //   }
  // }, [inView])
  const profileList =
    User.length === 0 ? (
      <SearchNone />
    ) : (
      User.map(user => (
        <Profile 
          key={user.id}
          userImage={user.image}
          userName={user.fullName}
        />
      ))
    );
  return <S.ProfileList>{profileList}</S.ProfileList>;
}

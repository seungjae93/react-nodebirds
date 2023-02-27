import React from "react";
import Head from "next/head";
import AppLayout from "@/components/AppLayout";
import NicknameEditForm from "@/components/NicknameEditForm";
import FollowList from "@/components/FollowList";

const profile = () => {
  //더미데이터
  const followerList = [
    { nickname: "seungjae" },
    { nickname: "SJ" },
    { nickname: "경통포세이돈" },
  ];
  const followingList = [
    { nickname: "seungjae" },
    { nickname: "seungjae" },
    { nickname: "seungjae" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default profile;

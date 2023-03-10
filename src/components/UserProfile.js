import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin: 10px 0px 0px 50px;
`;
const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          게시글 수<br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followings">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>SJ</Avatar>} title="SeungJae" />
      <ButtonWrapper>
        <Button onClick={onLogOut}>로그아웃</Button>
      </ButtonWrapper>
    </Card>
  );
};
export default UserProfile;

import React, { useEffect } from "react";
import Header from "../common/header/Index";
import styled from "styled-components";
import profile from "../../asset/auth/profile.svg";
import { customAxios } from "../../lib/axios/customAxios";

const Mypage = async () => {
  const request = async () => {
    try {
      const { data } = await customAxios.get(`/users/my`);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    request();
  });

  return (
    <>
      <Header />
      <Wrap>
        <Mptext>마이페이지</Mptext>
        <Mpbox>
          <Itemwrap>
            <Profile src={profile} />
            <Name>gksql2266</Name>
            <Button>프로필 수정하기</Button>
            <Button>로그아웃</Button>
          </Itemwrap>
        </Mpbox>
      </Wrap>
    </>
  );
};
export default Mypage;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Mptext = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 60px;
  margin-top: 3%;
  margin: 0 auto;
  color: #6949ff;
`;
const Mpbox = styled.div`
  width: 563px;
  height: 520px;
  background: #3779ff;
  border-radius: 30px;
  margin: 0 auto;
`;
const Itemwrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Profile = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 50px;
`;
const Name = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */
  /* margin-top: 100px; */
  margin: 0 auto;
  margin-top: 20px;
  color: #ffffff;
  margin-bottom: 30px;
`;
const Button = styled.button`
  width: 400px;
  height: 58px;
  border: none;
  background: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  :hover {
    background: #12d18e;
    color: #ffffff;
  }
`;

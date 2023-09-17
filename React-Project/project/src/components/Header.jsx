import React from "react";
import styled from "styled-components";
import ClockImg from "../img/ClockImg.svg";
import LogoImg from "../img/LogoImg.svg";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 140px;
`;

const Clock = styled.img``;

const Logo = styled.img`
  position: absolute;
  padding-top: 54px;
`;

const Title = styled.h1`
  padding-top: 66px;
  color: #f5df4d;
  font-family: tvN;
  font-size: 36px;
  font-weight: 700;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Clock src={ClockImg} alt="clockimg" />
      <Logo src={LogoImg} alt="logoimg" />
      <Title>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</Title>
    </HeaderStyle>
  );
}

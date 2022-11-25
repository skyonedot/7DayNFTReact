import React from 'react';
import styled from 'styled-components';
import Hi from '../Images/Hi.png';

import { Link,BrowserRouter } from "react-router-dom";
const LINK = styled(Link)`
  background: #7A2D2D;
  border-radius: 40px;
  width: 100px;
  height: 40px;
  color: white;
  margin: 0 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  // add hover scale
  &:hover {
    transform: scale(1.1);
  }
`


const NAV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid white;
`

const Button = styled.button`
  background: #A32E2E;
  border-radius: 40px;
  width: 130px;
  height: 40px;
  color: #FFFFFF;
  margin: 0 10px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  // add hover scale
  &:hover {
    transform: scale(1.1);
  }
  border: none;
`

const Image = styled.img`
  width: 94px;
  height: 92px;
  margin: 0 40px 20px;
`


export default function Navigation() {
  return (
    <BrowserRouter>
    <NAV>
      <Image src={Hi} alt="logo" />
      <LINK to="/">Home</LINK>
      <LINK to="/introduction">Introduction</LINK>
      <LINK to="/member">Member</LINK>
      <LINK to="/secrethome">ScecretHome</LINK>
      <Button onClick={() => { console.log("HI") }}> Connect Wallet </Button>
    </NAV>
    </BrowserRouter>
  );
}
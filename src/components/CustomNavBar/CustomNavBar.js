import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled.p`
  text-decoration: none;
  padding-top: .5%;
  padding-bottom: .5%;
  font-size: 20px;
  color: #818181;
  display: block;
  transition: 0.3s;
  :hover {
    color: #f1f1f1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  background-Color: white;
  color: lightgray;
  font-Size: 20px;
  box-Shadow: 0px 0px 5px black;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-Wrap: wrap;
  flex-Direction: row;
  justify-Content: space-around;
`;

const CustomNavBar = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Wrapper>
        <CustomLink as={Link} to="#Aboutus">About us</CustomLink>
        <CustomLink as={Link} to="#Foremployees">For employees</CustomLink>
        <CustomLink as={Link} to="#Foremployers">For employers</CustomLink>
        <CustomLink as={Link} to="#Help&Support">Help & Support</CustomLink>
        <CustomLink as={Link} to="#Stayconnected">Stay connected</CustomLink>
      </Wrapper>
    </div>
  );
};

export default CustomNavBar;

import React, { useState} from 'react';
import { Link } from "react-router-dom";
import logo from './../../asset/logo.jpg';
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

const Wrap = styled.div`
  transition: margin-right .5s;
  padding: 20px;
`;

const SideNav = styled.div`
  height: 100%; /* 100% Full-height */
  width: ${props => props.width}px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: white; /* Black*/
  box-shadow: -1px 6px 3px rgba(34, 60, 80, 0.2);
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`;

const SidenavLink = styled.div`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  :hover {
    color: #f1f1f1;
  }
`;

const DropDownMenu = () => {
  const [width, setWidth] = useState(0);
  return (
    <Wrap>
      <Navbar fixed="top" className="float-right" style={{ justifyContent: "flex-end", zIndex: 2, top: '1vh', right: '1vw' }} expand={false}>
        <Navbar.Toggle onClick={() => setWidth(width ? 0 : 250)} />
      </Navbar>
      <SideNav width={width}>
        <img className="mt-5" src={logo} alt="logo" width={150} height={100} />
        <SidenavLink as={Link} className="mt-3 pl-2" to="/">HOME</SidenavLink>
        <SidenavLink as={Link} className="pl-2" to="/find-Jobs">SEARCH JOB</SidenavLink>
        <SidenavLink className="pl-2" href="#link">EMPLOYERS</SidenavLink>
        <SidenavLink className="mt-5 pt-5 pl-2" href="#home">SIGN UP</SidenavLink>
        <SidenavLink as={Link} className="pl-2" to="/registration-step-1">SIGN IN</SidenavLink>
      </SideNav>
    </Wrap>
  );
};

export default DropDownMenu;

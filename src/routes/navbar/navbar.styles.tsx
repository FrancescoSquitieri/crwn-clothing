import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 8px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = styled(Link)`
       height: 100%;
       width: 70px;
       padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`

export const NavbarLinks = styled.div`
       width: 50%;
       height: 100%;
       display: flex;
       align-items: center;
       justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const NavbarLink = styled(Link)`
         padding: 10px 15px;
         cursor: pointer;
`

export const NavbarSignOut = styled.span`
         padding: 10px 15px;
         cursor: pointer;
`
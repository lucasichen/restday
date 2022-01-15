import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const HomeText = styled.div`
  color: white;
  font-size: 50px;
  margin: 50px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinkd = styled(Link)`
  border-radius: 4px;
  background: white;
  opacity: 95%;
  padding: 15px 32px;
  color: black;
  outline: none;
  border: 2px solid white;
  border-radius:30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 50px;
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 100%;
    color: #010606;
  }
`;
export const SmallText = styled.div `
  color: #666666;
  font-size: 20px;
`
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavListUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
`;

export const ItemNavLink = styled(NavLink)`
  display: inline-block;
  height: 27px;
  text-transform: uppercase;

  font-size: 13px;
  color: #404040;
  &.active {
    border-bottom: 2px solid #fee019;
  }
`;

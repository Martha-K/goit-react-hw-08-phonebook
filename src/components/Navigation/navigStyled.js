import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  font-size: 25px;

  :active {
    color: #e84a5f;
  }
`;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 65px;
  padding: 10px 15px;
  background: #222437;
  color: #fff;
  border-bottom: 1px solid rgba(46, 50, 74, 0.7);
`;

export const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
  width: 38px;
  margin-right: 6px;
  color: #6201ed;
`;

export const Name = styled.h1`
  color: #fff;
`;

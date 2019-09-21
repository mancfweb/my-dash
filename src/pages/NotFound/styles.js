import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  h1,
  p {
    text-align: center;
  }
  h1 {
    font-size: 120px;
    color: #6201ed;
  }
  p {
    color: #606a96;
  }
`;

export const ButtonLink = styled(Link)`
  margin-top: 20px;
  padding: 8px 12px;
  max-width: 170px;
  background: transparent;
  border: 1px solid #6201ed;
  border-radius: 4px;
  color: #6201ed;
  text-align: center;

  &:hover {
    background: #6201ed;
    color: white;
  }
`;

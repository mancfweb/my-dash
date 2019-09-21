import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListContent = styled.div`
  padding: 0;
  margin: 0;
  background: #222437;
  border-radius: 6px;
  @media (max-width: 992px) {
    overflow-y: scroll;
  }
`;

export const ListHeader = styled.div`
  padding: 15px;
`;

export const ListTable = styled.table`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
  tr {
    margin: 10px 0;
    padding: 15px;
    border-spacing: 0;
    border-collapse: collapse;
    &:hover {
      background: rgba(255, 255, 255, 0.01);
    }
  }
  th {
    color: #fff;
    padding: 15px;
    text-align: left;
    border: 0;
  }
  td {
    padding: 20px 15px;
    border: 0;
    border-top: 1px solid rgba(46, 50, 74, 0.7);
    color: #606a96;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 8px 12px;
  max-width: 110px;
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

export const Button = styled.button`
  width: 35px;
  height: 35px;
  margin: 5px 8px;
  border: 0;
  border-radius: 4px;
  background: #6201ed;
  color: white;
  text-align: center;
`;

export const PaginationContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: -15px;
  margin-right: -15px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #606a96;
  padding-left: 5px;
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  border-radius: 100%;
  width: 45px;
  height: 45px;
  background: transparent;
  border: 0;
  color: #576088;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    background: #141621;
  }
`;

export const ColLeft = styled.div`
  flex-grow: 0;
  max-width: 35%;
  flex-basis: 35%;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 992px) {
    max-width: 100%;
    flex-basis: 100%;
    margin-bottom: 40px;
  }
`;
export const ColRight = styled.div`
  flex-grow: 0;
  max-width: 65%;
  flex-basis: 65%;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 992px) {
    max-width: 100%;
    flex-basis: 100%;
    overflow: hidden;
  }
`;

export const ProfileCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222437;
  border-radius: 6px;
  padding: 30px;

  h3,
  p {
    color: #606a96;
    text-align: center;
  }
  h3 {
    font-size: 18px;
    margin: 15px 0;
  }
  p {
    margin-bottom: 3px;
  }
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
  display: flex;
  border-radius: 100%;
`;

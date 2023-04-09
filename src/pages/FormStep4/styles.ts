import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid rgb(37, 205, 137);
  border-radius: 10px;
  padding: 20px;

  background-color: rgb(37, 205, 137);
  h1 {
    font-size: 26px;
    margin: 0;
    padding: 0;
    text-align: center;
    color: rgb(2, 6, 23);
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: rgb(2, 6, 23);
  }
  span {
    font-weight: 400;
  }
`;
export const CardContainer = styled.div`
  background-color: rgb(2, 6, 23);
  height: 100%;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title2 = styled.div`
  text-align: center;
  font-size: 24px;
  padding-bottom: 30px;
  font-weight: bold;
  color: white;
`;
export const Card = styled.div`
  border: 2px solid rgb(37, 205, 137);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  max-width: 980px;

  h1 {
    font-size: 26px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  p {
    font-size: 14px;
    font-weight: 700;
    color: #b8b8d4;
  }
  span {
    font-weight: 400;
    font-size: 14px;
  }
  .job-title {
    font-size: 16px;
  }
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  a {
    text-decoration: none;
    color: #b8b8d4;
    padding-left: 5px;
    font-weight: 400px;
    cursor: pointer;
  }
`;

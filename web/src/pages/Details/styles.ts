import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items:center;
  flex-direction:column;
  @media(max-width: 1100px) {
    width: 90%;
  }
  main{
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    margin-top:32px;
  }
`;
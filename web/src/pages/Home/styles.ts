import styled from 'styled-components';
import Background from '../../assets/home-background.svg';


export const Container = styled.div`
  height: 100vh;
  background: url('${Background}') no-repeat 700px bottom;
  width: 100%;
  @media(max-width: 1400px) {
    background:none
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media(max-width: 1350px) {
      align-items:center;
    }

  main{
    flex: 1;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(max-width: 650px) {
      width:90%;
      max-width:none;
    }
    h1 {
      font-size: clamp(0.7rem, 2rem + 1.5vw, 3.5rem );
      color: var(--title-color);
    }
    p {
      font-size: 1.5rem;
      font-size: clamp(0.5rem, 0.8rem + 1vw, 2rem );
      margin-top: 24px;
      line-height: 32px;
    }
  }
`;

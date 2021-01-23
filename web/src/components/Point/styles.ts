import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  @media(max-width: 900px) {
    flex-direction:column;
  }
`;

export const Img = styled.div`
  width: 50%;
  img{
    width:100%;
    height: 350px;
    border-radius: 8px;
  }
  @media(max-width: 900px) {
      width: 100%;
    }
`;

export const Content = styled.div`
    width: 50%;
    height: 350px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .entity{
      display: flex;
      flex-direction: column;
      .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg{
          width: 40px;
          height: 40px;
          cursor: pointer;
          &:hover{
            color: var(--primary-color);
          }
        }
      }
      span{
        margin-top: 4px;
      }
    }
    .adress{
      display: flex;
      flex-direction: column;
      span{
        margin-top: 4px;
      }
    }
    .contact{
      width: 100%;
      display:flex;
      justify-content: space-evenly;
      align-items: center;
      @media(max-width: 600px) {
        display: flex;
        flex-direction: column;
      }
      a {
        width: 48%;
        height: 56px;
        background: var(--primary-color);
        border-radius: 8px;
        text-decoration: none;
        display: flex;
        align-items: center;
        overflow: hidden;
        strong {
          flex: 1;
          text-align: center;
          color: #FFF;
        }
        @media(max-width: 600px) {
          width:100%;
          margin:8px 0;
        }
        &:hover {
          background: #2FB86E;
        }
      }
      span {
        display: block;
        background: rgba(0, 0, 0, 0.08);
        width: 72px;
        height: 72px;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
      }
      svg {
        color: #FFF;
        width: 20px;
        height: 20px;
      }
    }
    @media(max-width: 900px) {
      width: 100%;
    }
`;

import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
    margin: 48px 0 0;
    width: 100%;
    padding: 0 16px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    @media(max-width: 520px) {
      flex-direction:column;
    }
    nav{
      font-size: clamp(0.5rem, 0.8rem + 1vw, 1rem );
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        height:auto;
        margin: 0 8px;
        color: var(--title-color);
        font-weight: bolder;
        display: flex;
        align-items: center;
        span{
          margin: 0 6px;
          color: var(--primary-color);
        }
        span svg{
          display: flex;
          align-items: center;
        }
        span{
          
        }
        &:hover{
          color: ${lighten(0.2, '#34CB79')};
        }
        
      }
      @media(max-width: 520px) {
        margin-top: 16px;
      }
    }
`;

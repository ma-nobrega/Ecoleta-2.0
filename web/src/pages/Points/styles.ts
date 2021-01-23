import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media(max-width: 1100px) {
    width: 95%;
  }
  main{
    width: 100%;
    display:flex;
    margin-top: 16px;
    flex-direction:column;

    p{
      margin:8px 16px 16px 16px;
    }
    .leaflet-container {
      width: 100%;
      height: 400px;
      border-radius: 8px;
      margin-bottom: 24px;
      .leaflet-marker-icon{
        width: 90px;
        height: 45px;
      }
    }
    
    .map-popup{
      .leaflet-popup-content-wrapper{
        border-radius: 8px;
        box-shadow: none;
        background: rgba(255,255,255,0.7);
      }
      .leaflet-popup-content{
        color: var(--primary-color);
        font-size:14px;
        font-weight:bold;
        margin: 8px 12px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        .img{
          img{
            width: 100%;
            height:112px;
            border-radius: 8px;

          }
        }
        
        .title{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width:100%;
          a{
            width: 28px;
            height: 28px;
            background: var(--primary-color);
            box-shadow: 17.2868px 27.6589px 41.4884px rgba(52,203,121,0.16);
            border-radius: 8px;
            display:  flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .leaflet-popup-tip-container{
        display: none;
      }
    }
    .items-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 16px;
      list-style: none;
      @media(max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media(max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media(max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
      }
      li {
        background: #f5f5f5;
        border: 2px solid #f5f5f5;
        height: 180px;
        border-radius: 8px;
        padding: 32px 24px 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        text-align: center;

        cursor: pointer;
        span {
          flex: 1;
          margin-top: 12px;

          display: flex;
          align-items: center;
          color: var(--title-color)
        }

        &.selected {
          background: #E1FAEC;
          border: 2px solid #34CB79;
        }
      }
    } 
  }

`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width:1100px;
  margin: 0 auto;
  @media(max-width: 1100px) {
      width:95%;
    }

  form {
    margin: 80px auto;
    padding: 32px;
    max-width: 730px;
    background: #FFF;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    h1 {
      font-size: clamp(0.7rem, 1.2rem + 1.5vw, 2rem );
    }
    fieldset {
      margin-top: 64px;
      min-inline-size: auto;
      border: 0;
    }
    legend {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      h2 {
        font-size: clamp(0.5rem, 0.8rem + 1.2vw, 2rem );
        /* font-size: 1.5rem; */
      }
      span{
        font-size: clamp(0.2rem, 0.32rem + 0.72vw, 1.8rem );
        font-weight: normal;
        color: var(--text-color);
      }
    }
    .field-group {
      flex: 1;
      display: flex;
      .field + .field {
        margin-left: 24px;
        @media(max-width: 730px) {
          margin-left:0;
        }
      }
      input + input {
        margin-left: 24px;
      }
      @media(max-width: 730px) {
        flex-direction:column;
      }
    }
    .field {
      flex: 1;

      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      label {
        font-size: 14px;
        margin-bottom: 8px;
      }
      input[type=text],
      input[type=email],
      input[type=number] {
        flex: 1;
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6C6C80;
        &::placeholder {
          color: #A0A0B2;
        }
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6C6C80;
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
    .field-check {
      flex-direction: row;
      align-items: center;
      input[type=checkbox] {
        background: #F0F0F5;
      }
      label {
        margin: 0 0 0 8px;
      }
    }
    .leaflet-container {
      width: 100%;
      height: 350px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
    button {
      width: 260px;
      height: 56px;
      background: var(--primary-color);
      border-radius: 8px;
      color: #FFF;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      align-self: flex-end;
      margin-top: 40px;
      transition: background-color 0.2s;
      cursor: pointer;
      &:hover {
        background: #2FB86E;
      }
    }
  }
  .items-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

`;

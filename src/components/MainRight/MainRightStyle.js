import styled from "styled-components";

export const TopWrapper = styled.div`
  .topCard {
    background-color: #19162c;
    border-radius: 0.5em;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    padding: 10px 20px;
    &__name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        color: #d1d045;
      }
    }
    .earning {
      width: 100%;
      padding: 5px 10px;
      p {
        margin: 8px 0;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        color: #adabb8;
        &:nth-child(odd) {
          background-color: #211d3a;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
          border-radius: 0.5em;
        }
        &:last-child span {
          font-size: 14px;
          color: #b1147d;
        }
      }
    }
  }
  .bottomRightCard {
    margin-top: 15px;
    max-height: 45vh;
    overflow-y: auto!important;
    &::-webkit-scrollbar{
        display: none;
    }
  }
  .topSeller {
    display: flex;
    align-items: center;
    margin: 10px 0;
    .topSellerImg {
      width: 45px;
      height: 45px;
      background-color: #252041;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .topSellerName {
      font-size: 14px;
      color: #adabb8;
      font-weight: bold;
      margin-left: 10px;
      span {
        display: block;
        font-size: 12px;
      }
    }
    .btn {
      font-size: 10px;
      margin-left: auto;
    }
  }
`;

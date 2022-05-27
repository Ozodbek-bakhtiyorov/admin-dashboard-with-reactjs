import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  top:0;
  display: flex;
  padding: 20px 10px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100px;
  }
  .inputBox {
    width: 350px;
    max-width: 350px;
    height: 45px;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      background-color: #19162c;
      border: none;
      outline: none;
      border-radius: 0.5em;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      color: #d0cfd4;
      font-size: 16px;
      font-family: cursive;
      padding: 0px 40px;
      &::placeholder {
        color: #757380;
      }
    }
    i {
      position: absolute;
      top: 0;
      left: 0;
      color: #757380;
      font-size: 20px;
      width: 40px;
      height: 45px;
      display: grid;
      place-items: center;
    }
  }
  .profileContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d0cfd4;
    position: relative;
    .profileIcon {
      width: 40px;
      height: 40px;
      background-color: #19162c;
      border-radius: 0.5em;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      text-align: center;
      line-height: 40px;
      font-size: 18px;
      position: relative;
    }
    .profileIcon::before {
      position: absolute;
      content: "";
      right: 7px;
      top: 5px;
      width: 8px;
      height: 8px;
      background: #b1147d;
      border-radius: 50%;
    }
    .profileImage {
      width: 40px;
      height: 40px;
      margin: 0 10px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .profileName {
      font-family: cursive;
      font-weight: 600;
      font-size: 14px;
    }
    .menuChevron {
      cursor: pointer;
      font-size: 12px;
      margin: 0 10px;
      &:hover {
        transition: transform 0.5s ease !important;
      }
    }
  }
  @media screen and (max-width: 725px) {
    width:100%;
    padding:10px;
    .inputBox {
      width: 150px;
      max-width: 150px;
      z-index: 101;
      input {
        transition: all .3s cubic-bezier(0.17, 0.67, 0.83, 1.39);
        &:focus{
        width: 320px;
      }
      }
    
    }
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100px;
  height: 100vh;
  background: #19163c;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  img {
    width: 7rem;
    padding-top: 30px;
  }
  ul {
    padding-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      margin: 20px 0;
      position: relative;
      width: 100%;
      text-align: center;
      &:hover a::before {
        width: 20px;
      }
      a {
        font-size: 24px;
        color: #8c8a95;
        transition: all 0.4s;
        &:hover {
          color: #b1147d;
        }

        &:before {
          position: absolute;
          content: "";
          left: -20px;
          top: 5px;
          width: 0px;
          height: 20px;
          background-color: #b1147d;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
      }
      &.active a::before {
        color: #b1147d;
      }
    }
  }

  #lastMenu {
    margin-top: auto;
  }
  @media screen and (max-width: 725px) {
    & {
      min-width: 68px;
      width: 68px;
    }
  }
`;

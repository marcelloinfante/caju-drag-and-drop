import styled from "styled-components";

export const LoaderBackground = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
`;

export const LoaderComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 70px;
  border: 5px solid #000;
  padding: 0 8px;
  box-sizing: border-box;
  background: linear-gradient(#fff 0 0) 0 0/8px 20px,
    linear-gradient(#fff 0 0) 100% 0/8px 20px,
    radial-gradient(farthest-side, #fff 90%, #0000) 0 5px/8px 8px content-box,
    #000;
  background-repeat: no-repeat;
  animation: loaderAnimation 2s infinite linear;

  @keyframes loaderAnimation {
    25% {
      background-position: 0 0, 100% 100%, 100% calc(100% - 5px);
    }
    50% {
      background-position: 0 100%, 100% 100%, 0 calc(100% - 5px);
    }
    75% {
      background-position: 0 100%, 100% 0, 100% 5px;
    }
  }
`;

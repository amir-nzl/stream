import styled from "styled-components";

export const Container = styled.div`
 background-color: #111;
 width: 100%;
 z-index: 1;
`;

export const Image = styled.img<{ isLarge: boolean }>`
 object-fit: contain;
 max-height: 150px;
 transition: transform 450ms;
 margin-right: 15px;
 &:hover {
    transform: scale(1.08);
  }

  ${({isLarge}) => isLarge && `
     max-height: 250px;
     margin-right: 10px;
     &:hover {
      transform: scale(1.09);
     }
 `}
`;

export const Page = styled.div`
`;

export const ContentWrapper = styled.div`
align-self: stretch;
`;

export const Content = styled.div`

 display: flex;
 align-items: center;
 justify-content: space-evenly;
 flex-flow: row wrap;
`;

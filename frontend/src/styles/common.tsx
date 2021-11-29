import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column wrap;
`;

export const Content = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-flow: row wrap;
`;

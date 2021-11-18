import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 20px;
  width: 100%;
`;
export const Title = styled.h2`
 color: #fff
`;
export const Items = styled.div`
 overflow-y: hidden;
 overflow-x: scroll;
 display: flex;
 padding: 20px;
 &::-webkit-scrollbar {
  display: none;       
 }
`;
export const Item = styled.div``;
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

export const Video = styled.div`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
   // animation policy
 transition-timing-function: ease-in-out;
 transition: all 1s;
`;


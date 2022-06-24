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

export const Video = styled.div`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
   // animation policy
 transition-timing-function: ease-in-out;
 transition: all 1s;
`;


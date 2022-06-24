import styled from 'styled-components';

export const Content = styled.div`
 margin-left: 30px;
 padding-top: 140px;
 height: 190px;
`;
export const Title = styled.h1`
 font-size: 3rem;
 font-weight: 800;
 padding-bottom: 0.3rem;
`;

export const Header = styled.header`
 color: white;
 object-fit: contain;
 height: 448px;
 background-repeat: no-repeat;
 min-height: 448px;
 background-size : 100% Auto;
`;

export const Description = styled.h1`
 width: 45rem;
 line-height: 1.3;
 padding-top: 1rem;
 font-size: 0.8rem;
 max-width: 360px;
`;

export const Button = styled.button`
 cursor: pointer;
 color: #fff;
 outline: none;
 border: none;
 font-weight: 700;
 border-radius: 0.2vw;
 padding-left: 2rem;
 padding-right: 2rem;
 padding-top: 0.5rem;
 padding-bottom: 0.5rem;
 margin-right: 1rem;
 background-color: rgba(51, 51, 51, 0.5);
 &:hover {
  color: #000;
  background-color: #e6e6e6;
  transition: all 0.2s;
 }

`;

export const Fade = styled.div`
 height: 7.4rem;
 background-image: linear-gradient(
   180deg,
   transparent,
   rgba(37.37,37,0.61),
   #111
 );
`

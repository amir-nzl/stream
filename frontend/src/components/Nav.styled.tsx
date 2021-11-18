import styled from 'styled-components';

export const Wrapper = styled.div`

 display: flex;
 padding:20px;
 justify-content:space-between;
 width: 100%;
 height: 30px;
 // Keep the navigation bar on top of everything
 position: fixed;
 top:0;
 z-index:1; 
 // animation policy
 transition-timing-function: ease-in;
 transition: all 0.5s;
`;

export const Logo = styled.img`
position: fixed;
padding-left:10px;
left:0;
    object-fit:contain;
    height:32px;
`;
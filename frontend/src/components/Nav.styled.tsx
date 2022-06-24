import styled from 'styled-components';

export const Wrapper = styled.div`
 padding:20px;
 width: 100%;
 height: 30px;
 // keeps the navigation bar on top of everything
 position: fixed;
 top:0;
 z-index:1;

 // animation policy
 transition-timing-function: ease-in;
 transition: all 0.5s;
`;

export const Logo = styled.img`
// keeps the logo in button on the top left of the page
position: fixed;
left:5px;
    object-fit:contain;
    height:45px;
`;

export const SignInButton = styled.button`
 // keeps the sign in button on the top right of the page
 position: fixed;
 right:20px;
 top:20px;
 padding: 6px 20px;
 font-size: 1rem;
 font-weight: 600px;
 color: #fff;
 background-color: #e50914;
 border: none;
 cursor: pointer;
`;

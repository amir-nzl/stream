import React from 'react';
import styled from "styled-components";

const LoginScreen = styled.div`
  height: 100vh;
  width: 100%;
  background-image:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.52),
      rgba(0, 0, 0, 0.73)
    ),
    url('login_bg.jpeg');
  background-size: cover;
  color: #fff;

`

const Content = styled.div`
  // Position the title 30% from the top
  position: absolute;
  top: 30%;
  padding: 20px;
  margin-bottom: 20px;
  // center the title
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled.h2`
  // Position the title 30% from the top
  font-size 2.125rem;
  padding: 20px;
`

function LoginPage() {
  return (
    <LoginScreen>
      <Content>
      <Title>View the latest movie trailers for current and upcoming releases</Title>
      </Content>
    </LoginScreen>
  );
}

export default LoginPage;

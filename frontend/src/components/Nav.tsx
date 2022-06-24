import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import {Logo, SignInButton, Wrapper} from "./Nav.styled";

function getListener(handleShow: (value: (((prevState: boolean) => boolean) | boolean)) => void) {
  return () => {
    if (window.scrollY > 100) {
      handleShow(false);
    } else {
      handleShow(true);
    }
  };
}

export const Nav: FC = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // returns a function in `useEffect` is done for cleanup
    // clean up is not run on first render
    // on dependencies value change, clean is run before the callback code
    // otherwise clean is run after component is unmounted
    return () => {
      window.removeEventListener("scroll", () => {
      });
    };
  }, []);
  return (
    <Wrapper style={show ? {backgroundColor: "#111"} : {}}>
      <Logo alt="Stream logo" src="stream.png"/>
      <SignInButton>Sign In</SignInButton>
    </Wrapper>
  );
};
;

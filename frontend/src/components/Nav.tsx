import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import {Logo, Wrapper} from "./Nav.styled";

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
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", ()=>{});
        };
    }, []);
    return (
        <Wrapper style={show?{backgroundColor: "#111"}:{}}>
            <Logo alt="Stream logo" src="stream.png"/>
        </Wrapper>
    );
};
;

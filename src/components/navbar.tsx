import styled from "styled-components";
import { Button } from "./button";

const NavBar = styled.div`
    padding: 0.5rem;
    display: flex;
    position:fixed;
    justify-content: end;
    width: 100%;
    background-color: #0A0D16;
    box-sizing: border-box;
`

export const Navbar = () => {
    return (
        <NavBar>
            <Button variant='second'>Home</Button>
            <Button variant='second'>Presentation</Button>
            <Button variant='second'>Knowledges</Button>
            <Button>CONTACT ME</Button>
            </NavBar>
    )
};
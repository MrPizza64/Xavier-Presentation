import styled from "styled-components"
import { StyledText, StyledTittle } from "../components/texts"
import { palette } from "../common/styles"
import { useObserver } from "../common/observer"
const TextContainer = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    gap: 0.5rem;
`
const StyledLine = styled.div`
    background-color: ${palette.purple};
    width: 5rem;
    height: 5px;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
`
const HeaderText = styled.p`
    font-family: 'Julius Sans One', sans-serif;
    color: ${palette.purple};
    font-size: 1.5rem;
`

const Divisor = styled.div<{visible: Boolean}>`
    display: flex;
    flex-direction: row;
    gap: 20rem;
    align-items: center;
    height: 100vh;

    & {
        opacity: ${({ visible }) => (visible ? 1 : 0)};
        transform: ${({ visible }) =>
        visible ? "translateY(0)" : "translateY(-30rem)"};
        transition: all 2s ease;
    }

    & > * > * > * {
        opacity: ${({ visible }) => (visible ? 1 : 0)};
        transform: ${({ visible }) =>
        visible ? "translateY(0)" : "translateY(-30rem)"};
        transition: all 2.5s ease;
    }

    & > * > * > * > * {
        opacity: ${({ visible }) => (visible ? 1 : 0)};
        transform: ${({ visible }) =>
        visible ? "translateY(0)" : "translateY(-30rem)"};
        transition: all 2.75s ease;
    }
`

const StyledPhoto = styled.img`
    height: 50%;
    width: 30%;
    border-radius: 0.5rem;
    border: 2px solid white;
`

export const Home = () => {
    const {ref, visible} = useObserver();
    return (
        <Divisor ref={ref} visible={visible}>
            <TextContainer>
                <HeaderContainer>
                    <StyledLine/>
                    <HeaderText>Web Developer Junior</HeaderText>
                </HeaderContainer>
                <StyledTittle>Xavier Navarro</StyledTittle>
                <StyledText>
                    Hello, my name is xavier, and welcome to my presentation page, 
                    in this project you will find more information about me and my skills.
                </StyledText>
            </TextContainer>
            <StyledPhoto src="/Photo_One.jpeg"/>
        </Divisor>
    )
}
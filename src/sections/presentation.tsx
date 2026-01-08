import styled from "styled-components";
import { Divisor } from "./home";
import { StyledText, StyledTittle } from "../components/texts";

const StyledImg = styled.img`
    height: 55%;
    width: 30%;
    border-radius: 15px;   
    border: 2px white solid;
`

const TextContainer = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-bottom: 20vh;
`

export const Presentation = () => {
    return (
        <Divisor>
            <StyledImg src="/Photo_Two.jpeg"/>
            <TextContainer>
                <StyledTittle>Presentation</StyledTittle>
                <StyledText>
                    My name is Xavier Navarro, im from Mendoza, Argentina, 
                    Im 18 yo and Im a web developer junior,
                </StyledText>
                <StyledText>
                    I have been adquiring knowledges about web development for about 2 years 
                    and now Im looking for a oportunity to participate In a interesant project
                </StyledText>
                
            </TextContainer>
        </Divisor>
    )
};
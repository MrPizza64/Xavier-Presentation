import styled from "styled-components"
import { StyledText, StyledTittle } from "../components/texts"
import { useObserver } from "../common/observer"

const Section = styled.div<{visible: Boolean}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & {
        opacity: ${({ visible }) => (visible ? 1 : 0)};
        transition: all 5s ease;
    }
`

const StyledLine = styled.div`
    background-color: white;
    height: 1px;
    width: 40%;
    margin-bottom: 2rem;
`
const KnowledgesBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem 10rem;
    flex-wrap: wrap;
`

export const Knowledge = () => {
    const {ref, visible} = useObserver();
    return (
        <Section ref={ref} visible={visible}>
            <StyledTittle>Knowledges</StyledTittle>
            <StyledLine />
            <KnowledgesBox>
                <div>
                    <StyledText>General Knowledges:</StyledText>
                    <StyledText>
                        - Github
                        <br />
                        - Typescript/Javascript
                        <br />
                        - Python
                        <br />
                        - Postgresql
                    </StyledText>
                </div>
                <div>
                    <StyledText>FrontEnd Knowledges:</StyledText>
                    <StyledText>
                        - React
                        <br />
                        - Redux, axios, and other packages
                        <br />
                        - HTTP Requests
                    </StyledText>
                </div>
                <div>
                    <StyledText>BackEnd Knowledges:</StyledText>
                    <StyledText>
                        - FastAPI (Python)
                        <br />
                        - express.js
                        <br />
                        - DB querys
                        <br/>
                        - Basic use of Prisma ORM & Sqlalchemy ORM
                    </StyledText>
                </div>
            </KnowledgesBox>

        </Section>
    )
}
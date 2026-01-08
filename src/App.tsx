import styled from 'styled-components'
import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './sections/home'
import { Presentation } from './sections/presentation'
import { Knowledge } from './sections/knowledge'
const AppContainer = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
`

function App() {
  return (
    <>
      <Navbar/>
      <AppContainer>
        <Home/>
        <Presentation/>
        <Knowledge/>
      </AppContainer>
    </>
  )
}

export default App

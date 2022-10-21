import "./App.css";
import { ThemeProvider } from "styled-components";
import logo from './logo.svg'
import React from "react";
import StyledButton, { FancyButton, SubmitButton,AnimatedLogo } from "./components/Button/Button";
import { DarkButton } from "./components/Button/Button.Styles";

function App() {

  const theme ={
    dark :{
      primary : '#000',
      text :'#fff'

    },
    light :{
      primary : '#fff',
      text :'#000'
       }
  }
  return (
    <ThemeProvider theme ={theme}>
    <div className="App">
      <center>
        <h1>Styled Components</h1>
        <img src={logo} className='App-logo' alt ="logo"/>
        <StyledButton>Button1</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Button2</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton>Fancy</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit3</SubmitButton>
        <div>
        <br />
      </div>
      <AnimatedLogo src ={logo} />
 
    <div>
    <br />
  </div>
  <DarkButton>Dark Theme</DarkButton>
   </center>
   </div>
    </ThemeProvider>
  );
}

export default App;

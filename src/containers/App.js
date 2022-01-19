import React from "react";
import styled from "styled-components";
import { About } from "../components/About";
import { Certificaciones } from "../components/Certificaciones";
import { Education } from "../components/Education";
import { Experiencia } from "../components/Experiencia";
import { Habilidades } from "../components/Habilidades";

const StyleDiv = styled.div`
    display: flex;
    margin: 0;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: system-ui;
    background-color: #F5F5F5;
    color: #f2f5ff;
    font-size: 2em;
    text-shadow: 1px 1px rgba(0,0,0,.5);
`
const GlobalStyle = styled.div`
    body{
        text-align: center;
        display: inline;
        justify-content: center;
        width: 100px;
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
`
const DivDos = styled.div`
display: flex;
`
const DivDos1 = styled.div`

`
const App = () =>{
    return(
        <GlobalStyle>
            <DivDos>
                <About/>
                <DivDos1>
                    <Education/>
                    <Experiencia/>
                    <Certificaciones/>
                    <Habilidades/>
                </DivDos1>
            </DivDos>
        </GlobalStyle>
    )
}
export default App
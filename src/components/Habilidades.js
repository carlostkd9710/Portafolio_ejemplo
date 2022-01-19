import { H2Styled } from "../styleds/H2Styleds";
import React from 'react'
import ProgressBar from "./ProgressBar";
import { DivcontentProgress, DivBar,DivContainer } from "../styleds/Habilidades";


export const Habilidades = () => {
    return (
        <DivContainer>
            <H2Styled name={"Habilidades"}/>
            <DivcontentProgress class="progress">
                <DivBar>
                    <h5>HTML</h5>
                    <ProgressBar value={40} max={100}/>
                </DivBar>
                <DivBar>
                    <h5>JavaScript</h5>
                    <ProgressBar value={75} max={100}/>
                </DivBar>
                <DivBar>
                    <h5>CSS</h5>
                    <ProgressBar value={35} max={100}/>
                </DivBar>
            </DivcontentProgress>
        </DivContainer>
    )
}

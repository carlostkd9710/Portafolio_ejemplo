import React from "react";
import { H2Styled } from "../styleds/H2Styleds";
import { Container } from "../styleds/EducationContainer";
import { H1segundo,Parrafo } from "../styleds/EducationStyles";
import { DivContainerEdu } from "../styleds/EducationContainer";

export const Education = () => {
    return (
        <DivContainerEdu>
            <H2Styled name={"Mis estudios"}/>
            <Container className="Education-Container">
                <div className="Education-Item">
                    <H1segundo>Universidad Santo Tomás - <span>2021</span></H1segundo>
                    <Parrafo>Ingenieria de Telecomunicaciones</Parrafo>
                </div>
            </Container>
        </DivContainerEdu>
    )
}

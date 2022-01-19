import { H2Styled } from "../styleds/H2Styleds";
import { Container } from "../styleds/EducationContainer";
import { H1segundo, Parrafo } from "../styleds/EducationStyles";
import { DivContainerCerti } from "../styleds/Certificaciones";
import React from 'react'

export const Certificaciones = () => {
    return (
        <DivContainerCerti>
            <H2Styled name={"Certificaciones"}/>
            <Container>
                <div className="Experiencia-Item">
                    <H1segundo>JavaScript - <span>2022</span></H1segundo>
                    <Parrafo>Algoritmos de JavaScript y Estructuras de Datos</Parrafo>
                </div>
                <div className="Experiencia-Item">
                    <H1segundo>Técnico SENA - <span>2014</span></H1segundo>
                    <Parrafo>Técnico en mantenimiento de equipos de computo</Parrafo>
                </div>
                <div className="Experiencia-Item">
                    <H1segundo>Google Activate - <span>2020</span></H1segundo>
                    <Parrafo>Transformación digital para el empleo</Parrafo>
                </div>
            </Container>
        </DivContainerCerti>
    )
}

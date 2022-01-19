import React from 'react'
import { H2Styled } from '../styleds/H2Styleds'
import { Container } from '../styleds/EducationContainer'
import { H1segundo,Parrafo } from '../styleds/EducationStyles'
import { DivContainerExp } from '../styleds/Experiencia'

export const Experiencia = () => {
    return (
        <DivContainerExp>
            <H2Styled name={"Mi experiencia"}/>
            <Container>
                <div className="Experiencia-Item">
                    <H1segundo>FollowUp - <span>2020</span></H1segundo>
                    <Parrafo>Auxiliar de soporte de operaciones</Parrafo>
                </div>
                <div className="Experiencia-Item">
                    <H1segundo>ZTE Colombia - <span>2021</span></H1segundo>
                    <Parrafo>Pasante de ingenieria</Parrafo>
                </div>
            </Container>
        </DivContainerExp>
    )
}

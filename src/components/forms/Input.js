// Packages
import React from "react"
import styled from "styled-components"

// Variables 
import * as Variables from "../Variables"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    width: 400px;
`

const Label = styled.label`
    text-align: left;
    font-weight: bold;
    color: ${Variables.Colors.Primary};
`

const InputStyled = styled.input`
    padding: 4px 8px;
    width: 100%;
    border: 1px solid ${Variables.Colors.Gray};
    border-radius: 4px;

    &:focus {
        border-color: ${Variables.Colors.Primary};
    }
`

function Input(props) {
    return (
        <Container style={props.style}>
            <Label htmlFor={props.id}>{props.label}</Label>
            <InputStyled
                type={props.type ? props.type : "text"}
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                placeholder={props.placeholder}
                {...props}
            />
        </Container>
    )
}

export default Input


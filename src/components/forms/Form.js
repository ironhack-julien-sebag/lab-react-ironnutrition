// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: center;

    &.closed {
        display: none;
    }
`

function Form(props) {
    return (
        <Container onSubmit={props.onSubmit} {...props}>
            {props.children}
        </Container>
    )
}

export default Form

// Packages
import styled from "styled-components"

// Variables
import * as Variables from "./Variables"

// Styles
const Button = styled.button`
    justify-self: center;
    border: none;
    background-color: ${props =>
        props.primary
            ? Variables.Colors.Primary
            : props.danger
            ? Variables.Colors.Danger
            : "transparent"};
    color: ${props =>
        props.primary
            ? Variables.Colors.White
            : props.danger
            ? Variables.Colors.White
            : Variables.Colors.Primary};
    font-weight: bold;
    font-size: 18px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props =>
            props.primary
                ? Variables.Colors.Primary70
                : props.danger
                ? Variables.Colors.Danger70
                : "transparent"};
        color: ${props =>
            props.primary
                ? Variables.Colors.White
                : props.danger
                ? Variables.Colors.White
                : Variables.Colors.Primary70}
`

export default Button

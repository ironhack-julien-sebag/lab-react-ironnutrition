// Packages
import React from "react"
import styled from "styled-components"

// Components
import Button from "./Button"
import * as Variables from "./Variables"

// Styles
const Container = styled.div`
    padding: 8px;
    border: 1px solid ${Variables.Colors.Gray};
    border-radius: 8px;
    text-align: left;
`

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;

    button {
        justify-self: start;
    }
`

const Title = styled.h4``

const Text = styled.p``

function FoodBox(props) {
    return (
        <Container>
            <Img src={props.food.image} alt={props.food.name} />

            <Content>
                <Title>{props.food.name}</Title>

                <Text>
                    <strong>Calories: </strong>
                    {props.food.calories}
                </Text>
                <Text>
                    <strong>Serving: </strong>
                    {props.food.servings}
                </Text>

                <Text>
                    <strong>Total Calories:</strong>{" "}
                    {props.food.calories * props.food.servings} kcal
                </Text>

                <Button onClick={props.deleteFunc} danger>
                    Delete
                </Button>
            </Content>
        </Container>
    )
}

export default FoodBox

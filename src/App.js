// Imports
import React, { useState } from "react"
import styled from "styled-components"

// Components
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"
import Search from "./components/Search"

// Data
import foods from "./foods.json"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 50px 10vw;
    text-align: center;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
`

const Empty = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    width: 100%;
    grid-column: span 4;
`

function App() {
    const [foodList, setFoodList] = useState(foods)

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const [search, setSearch] = useState("")

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const newFood = { name, image, calories, servings }

        setFoodList(food => [newFood, ...food])
        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleImageChange = e => {
        setImage(e.target.value)
    }

    const handleCaloriesChange = e => {
        setCalories(e.target.value)
    }

    const handleServingsChange = e => {
        setServings(e.target.value)
    }

    let results = foodList.filter(item => {
        return item.name.toLowerCase().includes(search)
    })

    const deleteCard = name => {
        setFoodList(foods => foods.filter(food => food.name !== name))
    }

    return (
        <Container>
            <h1>Iron nutrition</h1>

            <AddFoodForm
                onSubmit={handleSubmit}
                onChangeName={handleNameChange}
                onChangeImage={handleImageChange}
                onChangeCalories={handleCaloriesChange}
                onChangeServings={handleServingsChange}
            />

            <Search onChange={handleSearch} />

            <h2>Food list</h2>

            <Grid>
                {results.length > 0 ? (
                    results.map(food => (
                        <FoodBox
                            food={food}
                            key={food.name}
                            deleteFunc={() => deleteCard(food.name)}
                        />
                    ))
                ) : (
                    <Empty>No food yet!</Empty>
                )}
            </Grid>
        </Container>
    )
}

export default App

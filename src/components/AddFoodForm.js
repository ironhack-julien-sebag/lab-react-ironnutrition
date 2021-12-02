// Packages
import React, { useState } from "react"

// Components
import Button from "./Button"
import Input from "./forms/Input"
import Form from "./forms/Form"

function AddFoodForm(props) {
    const [isClosed, setIsClosed] = useState(true)
    const closed = isClosed ? "closed" : ""

    return (
        <>
            <h2>Add new food</h2>

            <Form onSubmit={props.onSubmit} className={closed}>
                <Input
                    label="Name"
                    id="name"
                    name="name"
                    onChange={props.onChangeName}
                />
                
                <Input
                    label="Image"
                    name="image"
                    id="image"
                    onChange={props.onChangeImage}
                    placeholder="https://imgur.com/gallery/nzL3gJe"
                />
                
                <Input
                    label="Calories"
                    name="calories"
                    id="calories"
                    type="number"
                    onChange={props.onChangeCalories}
                    min="1"
                />
                
                <Input
                    label="Servings"
                    name="servings"
                    id="servings"
                    type="number"
                    onChange={props.onChangeServings}
                    min="1"
                />

                <Input type="hidden" name="id" id="id" value={props.onChangeId} />

                <Button type="submit" primary>Create</Button>
            </Form>

            <Button onClick={() => setIsClosed(!isClosed)}>{isClosed ? "Show" : "Hide"} form</Button>
        </>
    )
}

export default AddFoodForm

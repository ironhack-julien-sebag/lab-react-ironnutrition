// Packages
import React from "react"

// Components
import Input from "./forms/Input"

function Search(props) {
    return (
        <>
            <h2>Search</h2>

            <Input
                label="Search"
                type="search"
                name="search"
                id="search"
                onChange={props.onChange}
                style={{justifySelf: "center"}}
            />
        </>
    )
}

export default Search

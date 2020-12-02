import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
// This is a context object that components interact with to access the location data
export const AnimalContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const AnimalProvider = (props) => {
    // array destructuring
    // useState takes on arg that reps the inital value of our state var array also returns a function to set the state var
    // locations = [] | setLocations = function def
    const [animals, setAnimals] = useState([])

    // chapter 14 - create new state var step 3
    const [ searchTerms, setTerms ] = useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals")
            .then(res => res.json())
            // .then(parsedLocations => setLocations(parsedLocations) )
            .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(getAnimals)
    }

    // chapter 13 - 1
    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${ id }?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `animals` state, the `addAnimals` function,
        and the `getAnimals` function as keys. This
        allows any child elements to access them.
    */
//    the value attribute contains an object with tree key/value
    return (
        <AnimalContext.Provider value={
            {
            animals, addAnimal, getAnimals, getAnimalById, setTerms, searchTerms
            }
        }>
            {props.children}
        </AnimalContext.Provider>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetails = (props) => {
    const { releaseAnimal, getAnimalById } = useContext(AnimalContext)

    // use state provides the state var and the set function
    // location and customer empty objects to handle inital render of state vendor
    const [animal, setAnimal] = useState({ location: {}, customer: {}})

    useEffect(() => {
        const animalId = parseInt(props.match.params.animalId)
        // debug
        console.log("props.match.params.animalId: ", animalId)
        getAnimalById(animalId)
            // calls setAnimal and uses what is returned/passed by previous funciton
            .then(setAnimal)
    }, [])

    return (
        <section className="animal">
            {console.log("print animal object: ", animal)}
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location.name}</div>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            <button onClick={
                () => {
                    releaseAnimal(animal)
                        .then(() => {
                            props.history.push("/animals")
                        })
                }
            }>
                Release Animal
            </button>
            <button onClick={() => {
                props.history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}
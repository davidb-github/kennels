import React, { useContext, useEffect } from "react"
import        { AnimalContext }       from './AnimalProvider'
import        { Animal }              from './Animal'
import                                     './Animal.css'


export const AnimalList = () => {
    // This state changes when `getLocations()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
//    will run only once because 2nd arg is a blank array/
    useEffect( () => {
        console.log("AnimalList: Initial render before data")
        getAnimals()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the animal state changed.
    */
//    This will run each time animal state changes.
    useEffect( () => {
        console.log("AnimalList: Animal state changed")
        console.log(animals)
    }, [animals])

    // use {} anytime javascript is needed inside JSX
    return (
        <div className="animals">
        {
            animals.map(pet => <Animal key={pet.id} animal={pet} />)
        }
        </div>
    )
}
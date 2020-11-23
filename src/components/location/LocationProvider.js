import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data

*/
// This is a context object that components interact with to access the location data
export const LocationContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LocationProvider = (props) => {
    // array destructuring
    // useState takes on arg that reps the inital value of our state var array also returns a function to set the state var
    // locations = [] | setLocations = function def
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            // .then(parsedLocations => setLocations(parsedLocations) )
            .then(setLocations)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
//    the value attribute contains an object with tree key/value
    return (
        <LocationContext.Provider value={
            {
            locations, addLocation, getLocations
            }
        }>
            {props.children}
        </LocationContext.Provider>
    )
}
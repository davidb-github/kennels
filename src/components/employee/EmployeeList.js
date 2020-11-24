import React, { useContext, useEffect } from "react"
import        { EmployeeContext }       from './EmployeeProvider'
import        { Employee }              from './Employee'
import                                       "./Employee.css"


export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
//    will run only once because 2nd arg is a blank array/
    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getLocations()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
//    This will run each time locations state changes.
    useEffect( () => {
        console.log("LocationList: Location state changed")
        console.log(locations)
    }, [locations])

    // use {} anytime javascript is needed inside JSX
    return (
        <div className="locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}
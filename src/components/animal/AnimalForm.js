import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalForm = (props) => {
    // 
    const { addAnimal, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    // 
    const name = useRef(null)
    const location = useRef(null)
    const customer = useRef(null)

    // 
    useEffect(() => {
        getCustomers()
        getLocations()
            .then(getAnimals)

    }, [])

    // 
    const constructNewAnimal = () => {
        const locationId = parseInt(location.current.value)

        // locationID makes no sense here
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                locationId,
                // customer: customer.current.value,
                // get currentCustomer from local storage
                customerId: parseInt(localStorage.getItem('kennel_customer'))

            })
                .then(() => props.history.push("/animals"))
        }
    }

    // 
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">Make Appointment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Pet's name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="boots" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="animalCustomer">Customer Name: </label>
                    <select defaultValue="" name="customer" ref={customer} id="customerAnimal"
                        className="form-control" >
                        Customer Name
                    {
                            customers.map(c => {
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            })
                        }

                    </select>
                </div>
            </fieldset> */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewAnimal()
                }}
                className="btn btn-primary">
                Save Appointment
           </button>
        </form>
    )
}


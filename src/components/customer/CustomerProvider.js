import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
// This is a context object that components interact with to access the customer data
export const CustomerContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
    // array destructuring
    // useState takes on arg that reps the inital value of our state var array also returns a function to set the state var
    // customers = [] | setCustomers = function def
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            // .then(parsedCustomers => setCustomers(parsedCustomers) )
            .then(setCustomers)
    }

    const addCustomer = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }

    /*
        You return a context provider which has the
        `customers` state, the `addCustomer` function,
        and the `getCustomer` function as keys. This
        allows any child elements to access them.
    */
//    the value attribute contains an object with tree key/value
    return (
        <CustomerContext.Provider value={
            {
            customers, addCustomer, getCustomers
            }
        }>
            {props.children}
        </CustomerContext.Provider>
    )
}
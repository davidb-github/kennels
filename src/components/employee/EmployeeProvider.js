import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
// This is a context object that components interact with to access the employee data
export const EmployeeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const EmployeeProvider = (props) => {
    // array destructuring
    // useState takes on arg that reps the inital value of our state var array also returns a function to set the state var
    // employees = [] | setEmployees = function def
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            // .then(parsedEmployees => setEmployees(parsedEmployees) )
            .then(setEmployees)
    }

    const addEmployee = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }

    /*
        You return a context provider which has the
        `employees` state, the `addEmployee` function,
        and the `getEmployee` function as keys. This
        allows any child elements to access them.
    */
//    the value attribute contains an object with tree key/value
    return (
        <EmployeeContext.Provider value={
            {
            employees, addEmployee, getEmployees
            }
        }>
            {props.children}
        </EmployeeContext.Provider>
    )
}
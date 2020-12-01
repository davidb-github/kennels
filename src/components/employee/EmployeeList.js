import React, { useContext, useEffect } from "react"
import { EmployeeContext } from './EmployeeProvider'
import { Employee } from './Employee'
import "./Employee.css"
// chapter 11
// 1. import link that 2. is dependent upon. - done
import { Link } from "react-router-dom"


export const EmployeeList = (props) => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    //    will run only once because 2nd arg is a blank array/
    useEffect(() => {
        console.log("EmployeeList: Initial render before data")
        getEmployees()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    //    This will run each time employees state changes.
    useEffect(() => {
        console.log("EmployeeList: Location state changed")
        console.log(employees)
    }, [employees])

    // use {} anytime javascript is needed inside JSX
    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
                {
                    employees.map(employee => {
                        return <Link key={employee.id} to={`/employees/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
                    })
                }

                {/* {employees.map(employee => <Employee key={employee.id} employee={employee} />)} */}
            </article>
        </div>
    )
}
// 2. add code to turn cards to link for emps. - done
// react
import React from "react"
import { Route } from "react-router-dom"
// providers
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from './customer/CustomerProvider'
import { EmployeeProvider } from './employee/EmployeeProvider'
// lists
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from './customer/CustomerList'
import { EmployeeList } from './employee/EmployeeList'
// chpt 8
import { EmployeeForm } from './employee/EmployeeForm'


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <AnimalProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        {/* Render the animal list when http://localhost:3000/employees */}
                        <Route exact path="/employees" render={
                            props =>
                                <EmployeeList {...props} />
                        } />

                        {/* the route that will respond when the button click changes the URL to /employees/create */}
                        <Route exact path="/employees/create" render={
                            props => <EmployeeForm {...props} />
                        } />
                    </LocationProvider>
                </EmployeeProvider>
            </AnimalProvider>
        </>
    )
}
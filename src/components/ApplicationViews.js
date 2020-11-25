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
import { EmployeeList }  from './employee/EmployeeList'


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
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
            
            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            
            <EmployeeProvider>
                {/* Render the animal list when http://localhost:3000/employees */}
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
            
            {/* add list as descendent to the provider for customer and employees */}
        </>
    )
}
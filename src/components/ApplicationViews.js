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
// chpt 10
import { AnimalForm } from './animal/AnimalForm'
// chpt 11
import { EmployeeDetail } from './employee/EmployeeDetail'
// chapt 12
import { LocationDetail } from './location/LocationDetail'


export const ApplicationViews = (props) => {
    return (
        <>
            <AnimalProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        {/* Render the location list when http://localhost:3000/ */}
                        <Route exact path="/">
                            <LocationList />
                        </Route>

                        <Route path="/locations/:locationId(\d+)" render={
                            props => <LocationDetail {...props} />
                        } />
                    </LocationProvider>
                </EmployeeProvider>
            </AnimalProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>

                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />

                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />

                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* 3. add new route below employeeform for /employee/employeeId[d:] - from chapter 11 - done */}
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

                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                            props => <EmployeeDetail {...props} />
                        } />
                    </LocationProvider>
                </EmployeeProvider>
            </AnimalProvider>
        </>
    )
}
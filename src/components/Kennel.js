import React from "react"
// modules
import { LocationList }     from './location/LocationList'
import { LocationProvider } from './location/LocationProvider'
import { AnimalList }       from './animal/AnimalList'
import { AnimalProvider }   from "./animal/AnimalProvider"
import { EmployeeList }     from './employee/EmployeeList'
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerList }     from './customer/CustomerList'
import { CustomerProvider } from './customer/CustomerProvider'
// nav bar
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

// styles
import "./Kennel.css"

export const Kennel = () => (
    <>
         <NavBar />
        <ApplicationViews />
    </>
)
import React from "react"
// modules
import { LocationList }     from './location/LocationList'
import { LocationProvider } from './location/LocationProvider'
import { AnimalList }       from './animal/AnimalList'
import { AnimalProvider }   from "./animal/AnimalProvider"
import { EmployeeList }     from './employee/EmployeeList'
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { Customer }         from "./customer/Customer"

// styles
import "./Kennel.css"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        
        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
            
        </article>

        <h2>Locations</h2>
        <article className="locations">
            {/* delete Location x 2 and then add <LocationList /> */}
            {/* anytime we want provider supplied data, we need to wrap that element in the provider <LocationProvider> tags and make it a child, also import provider at the top of this file.*/}
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)
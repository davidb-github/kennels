import React from "react"
// modules
import { Animal   } from './animal/Animal'
import { LocationList } from './location/LocationList'
import { Customer } from "./customer/Customer"
import { Employee } from "./employee/Employee"
import { LocationProvider } from './location/LocationProvider'
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
            <Animal />
            <Animal />
            <Animal />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
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
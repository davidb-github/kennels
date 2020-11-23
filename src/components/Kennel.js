import React from "react"
// modules
import { Animal   } from './animal/Animal'
import { Location } from './location/Location'
import { Customer } from "./customer/Customer"
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

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
            <Location />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)
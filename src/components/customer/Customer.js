import React from "react"
import "./Customer.css"

export const Customer = ( {customer} ) => (
    <section className="customer">
        <h3 className="customer__name">Name: {customer.name}</h3>
        <div className="customer__address">Email: {customer.email}</div>
    </section>
)
import React from "react"
import "./Employee.css"

export const Employee = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {employee.locationId}</div>
        <div className="employee__animald">animalId: {employee.animalId}</div>
    </section>
)

// add new values
import React, { useContext, useEffect } from "react"
import        { CustomerContext }       from "./CustomerProvider"
import        { Customer }              from './Customer'
import                                       "./Customer.css"


export const CustomerList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
//    will run only once because 2nd arg is a blank array/
    useEffect(() => {
        console.log("CustomerList: Initial render before data")
        getCustomers()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the customer state changed.
    */
//    This will run each time customers state changes.
    useEffect( () => {
        console.log("CustomerList: Customer state changed")
        console.log(customers)
    }, [customers])

    // use {} anytime javascript is needed inside JSX
    return (
        <div className="customers">
        {
            customers.map(cust => <Customer key={cust.id} customer={cust} />)
        }
        </div>
    )
}
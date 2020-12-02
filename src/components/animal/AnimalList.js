// import React, { useContext, useEffect } from "react"
// import { AnimalContext } from './AnimalProvider'
// import { Animal } from './Animal'
// import './Animal.css'
// import { LocationContext } from "../location/LocationProvider"
// import { CustomerContext } from "../customer/CustomerProvider"


// export const AnimalList = (props) => {
//   // This state changes when `getLocations()` is invoked below
//   const { animals, getAnimals } = useContext(AnimalContext)
//   const { locations, getLocations } = useContext(LocationContext)
//   const { customers, getCustomers } = useContext(CustomerContext)


  /*
      What's the effect this is reponding to? Component was
      "mounted" to the DOM. React renders blank HTML first,
      then gets the data, then re-renders.
  */
  //    will run only once because 2nd arg is a blank array/
  // useEffect(() => {
  //   console.log("AnimalList: Initial render before data")
  //   getLocations()
  //     .then(getCustomers)
  //     .then(getAnimals)
  // }, [])

  //     /*
  //         This effect is solely for learning purposes. The effect
  //         it is responding to is that the animal state changed.
  //     */
  // //    This will run each time animal state changes.
  //     useEffect( () => {
  //         console.log("AnimalList: Animal state changed")
  //         console.log(animals)
  //     }, [animals])

  // use {} anytime javascript is needed inside JSX
//   return (
//     <div className="animals">
//       {/* {console.log(animals, locations, customers)} */}
//       {/* add button */}
//       <button onClick={() => props.history.push("/animals/create")}>
//         Make Appointment
//       </button>
//       {
//         animals.map(animal => {
//           const owner = customers.find(c => c.id === animal.customerId)
//           const clinic = locations.find(l => l.id === animal.locationId)
//           // console.log("OWNER:",  owner)
//           // debugger
//           return <Animal key={animal.id} animal={animal} location={clinic} customer={owner} />
//         })
//       }
//     </div>
//   )
// }

// begin chapter 13
import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from './Animal'
import "./Animal.css"

export const AnimalList = ({ history }) => {
    // chpt-14 added searchTerms
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)

    // chpt-14 add useState for filtered animal collection
    const [filteredAnimals, setFiltered] = useState([])



    // Init. hook to go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    
    /*
        This effect hook function will run when the following two state changes happen:
            1. The animal state changes. First when it is created, then once you get the animals from the API
            2. When the search terms change, which happens when the user types something in the AnimalSearch component
    */
   // chpt-14 add 2nd useEffect
    useEffect(() => {
        console.log("searchTerms state is: ", searchTerms)
        console.log("animals state is: ", animals)
        if (searchTerms !== "") {
            // If the search field is not blank, display matching animals
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
            console.log("subset state is: ", subset)
            setFiltered(subset)
        } else {
            // If the search field is blank, display all animals
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}
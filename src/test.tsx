// import { useState } from "react"

// const test  = () => {
//        //This is incorrect
//     const [person, setPerson] = useState({
//         name: 'William'
//     })
//     // This won't work
//     const onAge= () => {
//         person.age = 24
//     }
//     //This is correct
//     const [person1, setPerson1] = useState({
//          name: 'William'
//     })
//     // This will work
//     const onAge1= () => {
//         const personWithAge = {
//             ...person,
//             age: 24
//         }
//         setPerson(personWithAge)
//     }
//     return(
//         <div>

//         </div>
//     )
// }

// export default 
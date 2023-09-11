import React from 'react'
const navData = [
    {
        id:1, 
        name: "Rizwan",
        working: "Utor"
    },
    {
        id:2, 
        name: "Ejaz",
        working: "Utor"
    },
    {
        id:3, 
        name: "Ilyas",
        working: "Utor"
    },
    {
        id:4, 
        name: "Ahmed",
        working: "Utor"
    },
    {
        id:5, 
        name: "Hamza",
        working: "Utor"
    },
];

const navDataList = navData.map (item => (
        <li key={item.id} >
        {{item}}
    </li>
))




function Cards() {
  return (
    <>
    <ul>
       {navDataList}

    </ul>
    </>
  )
}

export default Cards
'use client'

import { MouseEventHandler } from "react"

export default function Playground () {

    type ObjectType = {
        name : string,
        age: number,
        handleClick: MouseEventHandler<HTMLButtonElement>
    }

   const Test = ( {name , age, handleClick } : ObjectType) => {
        return <button className="cursor-pointer" onClick={handleClick}>{name}</button>
   }
   const person = {
        name: "min",
        age: 231
   }

//    test(person)

   return <>
        <Test name="Min" age={1232} handleClick={()=> { console.log("Hello")}}/>  <br />
        <Test name="sdf" age={45} handleClick={()=> { alert("hello")}}/><br />
        <Test name="sd" age={34} handleClick={()=> { return 'sdfs' }}/><br />
        <Test name="Mwerin" age={45} handleClick={()=> { return true}}/><br />
        <Test name="Misafn" age={54656} handleClick={()=> {}}/><br />
        <Test name="Masdin" age={886} handleClick={()=> {}}/><br />
   </>
}
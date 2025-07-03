'use client'
import { bearStore } from "@/store/bearStore"
export default function About () {
  const { bear, tiger, increaseBear, increaseTiger } = bearStore()
  console.log(bear)

  return <div onClick={increaseTiger}> Click me { bear } { tiger} </div>
}
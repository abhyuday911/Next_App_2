"use client"
import { User } from '@/contexts/Usercontext'
import React, { useContext } from 'react'

const page = (props) => {

  const [] = useContext(User)
  // console.log(ppp)
  return (
    <>
    <div>{props.params.username}</div>
    {/* <h1>{ppp}</h1> */}
    </>
  )
}

export default page
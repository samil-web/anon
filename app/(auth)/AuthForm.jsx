'use client'
import { useState } from "react"

export default function AuthForm({handleSubmit}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e,email,password)}>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" value={email} placeholder="email" required></input>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} placeholder="password" required></input>
            <button onClick={(e)=>{handleSubmit(e,email,password)}}></button>
        </form>
    </div>
  )
}

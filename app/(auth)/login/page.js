
'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"

import AuthForm from "../AuthForm"
import { useRouter } from "next/navigation"

export default function Login() {
  const [formError,setFormError] = useState('')
  const router = useRouter()
  const handleSubmit = async(e,email,password)=>{
    e.preventDefault()

    const supabase = createClientComponentClient()
    const {error} = await supabase.auth.signInWithPassword(
      {
        email,
        password
      }
    )
    if(error){
      setFormError(error.message)
    }
    if(!error){
      router.push('/')
    }
  }
  return (
    <div>
      <p>Login</p>
      <AuthForm handleSubmit={handleSubmit}/>
      {formError && <div>{formError}</div>}
    </div>

  )
}

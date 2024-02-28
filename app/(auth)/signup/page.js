
'use client'
import { Suspense, useState } from "react"
import Loading from "../../(dashboard)/loading"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../../(dashboard)/error";
import AuthForm from "../AuthForm";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Signup() {
  const [error,setError] = useState('')
  const router = useRouter()
  // resolve a promise after 3 sec
  // const delay = async () => {
  //   await new Promise(resolve => setTimeOut(resolve, 3000));
  //   // Additional asynchronous operations can be added here if needed
  // };
  // //where to use delay now ?
  // await delay();
  async function handleSubmit(e,email,password){
    e.preventDefault() 
    console.log(email,password)
    const supabase = createClientComponentClient();
    const {error} = await supabase.auth.signUp({
      email,
      password,
      options:{
        emailRedirectTo:`${location.origin}/api/auth/callback`
      }
    })
    if(error){
      setError(error.message)
    }
    if(!error){
      router.push('/verify')
    }
  }

  return (
    <div>
    {error&&<div>{error}</div>}
          <AuthForm handleSubmit={handleSubmit}/>
    </div>
  )
}

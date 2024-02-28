
'use client'
import { Suspense } from "react"
import Loading from "../../(dashboard)/loading"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../../(dashboard)/error";
import AuthForm from "../AuthForm";
import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { useRouter } from "next/router";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function page() {
  // resolve a promise after 3 sec
  // const delay = async () => {
  //   await new Promise(resolve => setTimeOut(resolve, 3000));
  //   // Additional asynchronous operations can be added here if needed
  // };
  // //where to use delay now ?
  // await delay();
  const handleSubmit = async(e,email,password)=>{
    e.preventDefault() 
    console.log(email,password)
    router = useRouter()
    const supabase = createClientComponentClient();
    const {data,error} = await supabase.auth.signUp({
      email,
      password
    })
    if(error){
      {error.message}
    }
    if(!error){
      router.push('/verify')
    }
  }

  return (
    <div>
          <AuthForm handleSubmit={handleSubmit}/>
    </div>
  )
}

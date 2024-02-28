
'use client'
import { Suspense } from "react"
import Loading from "../../(dashboard)/loading"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../../(dashboard)/error";
import AuthForm from "../AuthForm";

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
  }

  return (
    <div>
          <AuthForm handleSubmit={handleSubmit}/>
    </div>
  )
}

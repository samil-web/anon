import { Suspense } from "react"
import Loading from "../../(dashboard)/loading"
import {setTimeOut} from "timers/promises" 
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../../(dashboard)/error";

export default async function page() {
  // resolve a promise after 3 sec
  // const delay = async () => {
  //   await new Promise(resolve => setTimeOut(resolve, 3000));
  //   // Additional asynchronous operations can be added here if needed
  // };
  // //where to use delay now ?
  // await delay();
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
    <ErrorBoundary fallback={<Error/>}>
        <form action="/auth/signup" method="post" className="flex flex-col justify-center items-center"> 
            <input className="p-2 border-blue-500" type="text" name="username" placeholder="username" />
            <input className="p-2 border-blue-500" type="password" name="password" placeholder="password" />
        </form>
    </ErrorBoundary>
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Signup</button>
    </div>
  )
}

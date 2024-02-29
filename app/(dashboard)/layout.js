import Footer from "@/components/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function layout({children}) {
  const supabase = createServerComponentClient({cookies});
  const {data,error} = await supabase.auth.getSession()
  
  if(error){
    console.log(error)
  }
  if(!data.session){
    redirect('/login')
  }
  
  return (
    <>
    <Navbar user={data.session.user}/>
        {children}
    <Footer />
    </>
  )
}

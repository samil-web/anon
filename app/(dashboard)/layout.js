import Footer from "@/components/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function layout({children}) {
  const supabase = createServerComponentClient({cookies});
  const {data} = supabase.auth.getSession()
  
  
  return (
    <>
    <Navbar user={data}/>
        {children}
    <Footer />
    </>
  )
}

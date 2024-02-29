'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/router"


export default function LogoutButton() {

    const handleLogout = async()=>{
        const supabase = createClientComponentClient()
        const {error} = await supabase.auth.signOut() 
        const router = useRouter()

        if(error){
            console.log(error)
        }
        if(!error){
            router.push('/login')
        }
    }
  return (
   <button onClick={handleLogout}>
        Logout
   </button>
  )
}

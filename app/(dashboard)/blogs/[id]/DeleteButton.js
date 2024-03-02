'use client'
import { useState } from "react"
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function DeleteButton({id}){
    const [isLoading,setIsLoading] = useState(false)
    const router  = useRouter()
    const handleClick = async()=>{
        setIsLoading(true)
        console.log(`http://localhost:3000/api/tickets/${id}`)
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`,
        {
            method:'DELETE',
        })
        const json = await res.json()

        if(json.error){
            setIsLoading(false)
        }
        if(!json.error){
            router.refresh()
            router.push('/blogs')
        }
    }
    return(
        <>
            <MdDelete 
            onClick={handleClick}
            disabled = {isLoading}
            >
            {isLoading &&
                <>
                <MdDelete/>
                <p>Deleting...</p>
                </> 
                }
                {!isLoading&&
                    <>
                        <MdDelete/>
                        <p>Delete Ticket</p>
                    </>
                }
            </MdDelete>
        </>
    )
}
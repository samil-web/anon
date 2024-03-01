'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default async function CreateBlog() {
    // should return a form with a title and body
    // and a submit button
    // we should use useState for the form data
    // use async await to fetch data from the backend
    const [loading,setLoading] = useState(false)
    const [title,setTitle] = useState('new')
    const [body,setBody] = useState('new')
    const [priority,setPriority] = useState('low')
    const router = useRouter()
    const handleSubmit = async(e) =>{
        // fetch the data from the backend
        // using post method
        // check status code
        // if status code is 200 redirect to /blogs
        // return form data
        e.preventDefault()
        setLoading(true)

        const ticket = {title,body,priority}
        const res = await fetch('http://localhost:3000/api/tickets',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(ticket)
        })

        const json = await res.json()
        if(json.error){
            console.log(error.message)
        }
        if(json.data){
            router.refresh()
            router.push('/blogs')
        }
        
}
return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-full w-full">
        <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder="title" value={body} onChange={(e)=>setBody(e.target.value)} />
        <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button onClick={(e)=>{e.preventDefault();handleSubmit(e);setLoading(true)}}>
            {loading && <p>Creating...</p>}
            {!loading && <p>Submit</p>}
        </button>
    </form>
  )
}

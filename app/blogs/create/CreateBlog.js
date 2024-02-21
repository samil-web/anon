'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateBlog() {
    // should return a form with a title and body
    // and a submit button
    // we should use useState for the form data
    // use async await to fetch data from the backend
    const [loading,setLoading] = useState(false)
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [priority,setPriority] = useState('')
    const [userEmail,setUserEmail] = useState('')
    const router = useRouter()
    const handleSubmit = async(e) =>{
        // fetch the data from the backend
        // using post method
        // check status code
        // if status code is 200 redirect to /blogs
        // return form data
        e.preventDefault()
        setLoading(true)
        const res = await fetch('http://localhost:4000/tickets',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title,
                body,
                priority,
                userEmail:'shamil.alieff@gmail.com'
            })
        })
        if(res.status === 201){
            router.refresh()
            router.push('/blogs')
    }
  return (
    <form>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} />
        <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <button type = "submit" onClick={(e)=>{e.preventDefault();handleSubmit(e);setLoading(true)}}>
            {loading && <p>Creating...</p>}
            {!loading && <p>Submit</p>}
        </button>
    </form>
  )
}}

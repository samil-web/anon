import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const fetchData = async()=>{
    const supabase = createServerComponentClient({cookies})

    const {data,error} = await supabase
    .from('ticket')
    .select()

    if(error){
        console.log(error.message)
    }
    if(!error){
        return data
    }
}

export default async function BlogList() {
    const blogs = await fetchData()
    return (
    <div>
        {blogs.map((blog)=>{
            return(
                <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                    <p>{blog.prioity}</p>
                    <p>{blog.user_email}</p>
                </div>
            )
        })}
        {
            blogs.length === 0 && <p>No blogs found</p>
        }
    </div>
  )
}

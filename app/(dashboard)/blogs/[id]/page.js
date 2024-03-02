import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { cookies } from "next/headers"
import DeleteButton from "./DeleteButton"

export const dynamicParams = true

// export async function generateStaticParams() {
//     // fetch the data and return id:ticket.id by mapping
//     // for static generation
//     const data = await fetch('http://localhost:4000/tickets')
//     const blogs = await data.json()
//     return blogs.map((blog)=>({
//         id:blog.id
//     }))
// }

export async function getStaticProps({ params: {slug} }) {
    // ↓add 
    console.log(`Building slug: ${slug}`)
  }

async function getBlog(id){
    const supabase = createServerComponentClient({cookies})

    const {data:blog,error} = await supabase.from('ticket')
    .select()
    .eq('id',id)
    .single()
    
    if(error){
        console.log(error)
    }
    return blog
}

export async function generateMetadata({params}) {
    const supabase = createServerComponentClient({cookies})
    // metadata will be displayed in the browser
    const {data:blog,error} = await supabase.from('ticket')
    .select()
    .eq('id',params.id)
    .single()
    
    if(error){
        console.log(error)
    }
    return {
        title:`Blog | ${blog?.title || 'Not found'}`
    }
}




export default async function Blog({params}) {
    const supabase = createServerComponentClient({cookies})
    
    const {data} = await supabase.auth.getSession()
    

    const {id,title,body,priority,user_email} = await getBlog(params.id)
    return(
        <Suspense>
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{priority}</p>
            {data.session.user.email ===  user_email && <DeleteButton id={id}/> }
            </div>
        </Suspense>
    )
}
import { notFound } from "next/navigation"
import { Suspense } from "react"

export const dynamicParams = true

export async function generateStaticParams() {
    // fetch the data and return id:ticket.id by mapping
    // for static generation
    const data = await fetch('http://localhost:4000/tickets')
    const blogs = await data.json()
    return blogs.map((blog)=>({
        id:blog.id
    }))
}

export async function getStaticProps({ params: {slug} }) {
    // ↓add 
    console.log(`Building slug: ${slug}`)
  }

async function getBlog(id){
    const data = await fetch("http://localhost:4000/tickets/"+id,{
        next:{
            revalidate: 60
        }
    })
    if(!data.ok){
        notFound()
    }
    return data.json()
}

export async function generateMetadata({params}) {
    // metadata will be displayed in the browser
    const data = await fetch('http://localhost:4000/tickets/'+params.id)
    const blog = await data.json()
    console.log(blog)
    return {
        title:`Blog | ${blog.title}`
    }
}




export default async function Blog({params}) {
    const {id,title,body,priority,userEmail} = await getBlog(params.id)
    return(
        <Suspense>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{priority}</p>
        </Suspense>
    )
}
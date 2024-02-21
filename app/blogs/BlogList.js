const fetchData = async()=>{
    const res = await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate: 10
        }
    })
    const data = await res.json()
    return data
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

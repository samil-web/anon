import BlogList from "./BlogList";

export default function page() {
  return (
        <main>
            <nav>
                <div>
                    <h2>Blogs</h2>
                    <p>Recent blogs</p>
                </div>
            </nav>
            <BlogList/>
        </main>
  )
}

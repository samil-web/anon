
export default function layout({children}) {
  return (
    <div>
    <Link href='/login'>Login</Link>
    <Link href='/signup'>Signup</Link>s
    {children}
    </div>
  )
}
